using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories
{
    public class RoleRepository : BaseRepository<Role>, IRoleRepository
    {
        private readonly MDbContext _context;
        public RoleRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
