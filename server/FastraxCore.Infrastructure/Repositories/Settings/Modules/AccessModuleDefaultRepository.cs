using FastraxCore.Domain.Entities.Settings.Modules;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories.Settings.Modules
{
    public class AccessModuleDefaultRepository: BaseRepository<AccessModuleDefault>, IAccessModuleDefaultRepository
    {
        private readonly MDbContext _context;
        public AccessModuleDefaultRepository(MDbContext context) : base(context)
        {
            _context = context;
        }
    }
}