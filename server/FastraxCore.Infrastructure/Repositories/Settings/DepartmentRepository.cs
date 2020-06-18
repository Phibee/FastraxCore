using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories.Settings
{
    public class DepartmentRepository : BaseRepository<Department>, IDepartmentRepository
    {
        private readonly MDbContext _context;
        public DepartmentRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
