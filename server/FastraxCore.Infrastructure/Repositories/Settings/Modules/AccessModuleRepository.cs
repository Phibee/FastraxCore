using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories.Settings.Modules
{
    public class AccessModuleRepository : BaseRepository<AccessModule>, IAccessModuleRepository
    {
        private readonly MDbContext _context;
        public AccessModuleRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}