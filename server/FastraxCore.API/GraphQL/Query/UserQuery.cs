using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FastraxCore.API.GraphQL.DTOs;
using FastraxCore.Domain.Entities.Settings.Modules;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;

namespace FastraxCore.API.GraphQL.Query
{
    public class UserQuery
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IDesignationRepository _designationRepository;
        private readonly IAccessModuleRepository _accessModuleRepository;
        private readonly IAccessModuleDefaultRepository _accessModuleDefaultRepository;
        private readonly IAccessModuleCustomRepository _accessModuleCustomRepository;

        public UserQuery(
            IUserRepository userRepository,
            IRoleRepository roleRepository,
            IDepartmentRepository departmentRepository,
            IDesignationRepository designationRepository, 
            IAccessModuleRepository accessModuleRepository, 
            IAccessModuleDefaultRepository accessModuleDefaultRepository, 
            IAccessModuleCustomRepository accessModuleCustomRepository)
        {
            _roleRepository = roleRepository;
            _userRepository = userRepository;
            _departmentRepository = departmentRepository;
            _designationRepository = designationRepository;
            _accessModuleRepository = accessModuleRepository;
            _accessModuleDefaultRepository = accessModuleDefaultRepository;
            _accessModuleCustomRepository = accessModuleCustomRepository;
        }

        /// <summary>
        /// Gets collection of Access Modules
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<AccessModule>> AccessModules() => _accessModuleRepository.GetAllAsync();

        /// <summary>
        /// Gets only root Access Module and it's children
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<AccessModule>> AccessRootModules() =>
            Task.Run(() => _accessModuleRepository.GetAllAsync().Result.Where(c => c.ParentAccessModuleId == null));
        
        /// <summary>
        /// Gets collection of Users
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<User>> Users() => _userRepository.GetAllAsync();

        /// <summary>
        /// Gets collection of Roles
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<Role>> Roles() => _roleRepository.GetAllAsync();

        /// <summary>
        /// Gets collection of Departments
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<Department>> Departments() => _departmentRepository.GetAllAsync();

        /// <summary>
        /// Gets collection of Designations
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<Designation>> Designations() => _designationRepository.GetAllAsync();
        
        /// <summary>
        /// Gets collection of Default Access Modules
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AccessModuleDefault> AccessModulesDefault() => _accessModuleDefaultRepository.GetAll();

        /// <summary>
        /// Gets all the User Access Modules based on his roleId and userId
        /// </summary>
        /// <param name="roleId">Role Id</param>
        /// <param name="userId">User Id</param>
        /// <returns></returns>
        public IEnumerable<AccessModuleDTO> UserAccessModules(int roleId, long userId)
        {
            var customAccess = _accessModuleCustomRepository
                .AllIncluding(c => c.AccessModule)
                .Where(acm =>
                acm.UserId == userId && acm.RoleId == roleId && acm.AccessModule.IsActive)
                .Select(r => new AccessModuleDTO()
                {
                    AccessModuleId = r.AccessModule.Id,
                    ModuleName = r.AccessModule.ModuleName,
                    ParentAccessModuleId = r.AccessModule.ParentAccessModuleId,
                    IsEnable = r.IsEnable
                });

            var defaultAccess = _accessModuleDefaultRepository
                .AllIncluding(c => c.AccessModule)
                .Where(acd => acd.RoleId == roleId && acd.AccessModule.IsActive && !customAccess.Any(ca => ca.AccessModuleId == acd.AccessModuleId))
                .Select(r => new AccessModuleDTO()
                {
                    IsEnable = r.IsEnable,
                    ModuleName =  r.AccessModule.ModuleName,
                    AccessModuleId = r.AccessModule.Id,
                    ParentAccessModuleId = r.AccessModule.ParentAccessModuleId
                });

            if (customAccess.Any())
                return defaultAccess.Union(customAccess).OrderBy(d => d.AccessModuleId);
            
            return defaultAccess.OrderBy(d => d.AccessModuleId);
        }
        
        /// <summary>
        /// Gets collection of Custom Access Modules
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AccessModuleCustom> AccessModulesCustom() => _accessModuleCustomRepository.GetAll();
    }
}
