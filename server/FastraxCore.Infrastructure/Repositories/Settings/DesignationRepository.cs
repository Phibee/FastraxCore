using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories.Settings
{
    public class DesignationRepository : BaseRepository<Designation>, IDesignationRepository
    {
        private readonly MDbContext _context;
        public DesignationRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
