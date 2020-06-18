using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Entities.Settings.Modules;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using HotChocolate.Types;

namespace FastraxCore.API.GraphQL.Types
{
    public class AccessModuleCustomType : ObjectType<AccessModuleCustom>
    {
        protected override void Configure(IObjectTypeDescriptor<AccessModuleCustom> descriptor)
        {
            descriptor.Field(x => x.Id).Type<IntType>();
            descriptor.Field(x => x.RoleId).Type<IntType>();
            descriptor.Field(x => x.IsEnable).Type<BooleanType>();
            descriptor.Field(x => x.UserId).Type<IntType>();
            
            descriptor.Field(x => x.AccessModule).Resolver(
                ctx => ctx.Service<IAccessModuleRepository>().GetSingle(d => d.Id == ctx.Parent<AccessModuleCustom>().AccessModuleId));
            
            descriptor.Field(x => x.Role).Resolver(
                ctx => ctx.Service<IRoleRepository>().GetSingle(d => d.Id == ctx.Parent<AccessModuleCustom>().RoleId));
            
            descriptor.Field(x => x.User).Resolver(
                ctx => ctx.Service<IUserRepository>().GetSingle(d => d.Id == ctx.Parent<AccessModuleCustom>().UserId));
        }
    }
}