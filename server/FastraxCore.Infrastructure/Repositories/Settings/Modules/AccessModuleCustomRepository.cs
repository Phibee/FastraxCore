using FastraxCore.Domain.Entities.Settings.Modules;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using FastraxCore.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace FastraxCore.Infrastructure.Repositories.Settings.Modules
{
    public class AccessModuleCustomRepository : BaseRepository<AccessModuleCustom>, IAccessModuleCustomRepository
    {
        private readonly MDbContext _context;
        public AccessModuleCustomRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}