using FastraxCore.Domain.Entities.Settings.Identity;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Infrastructure.Context;

namespace FastraxCore.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        private readonly MDbContext _context;
        public UserRepository(MDbContext context) : base(context)
        {
            _context = context;
        }

        public User GetSingleByUsername(string username)
        {
            throw new NotImplementedException();
        }
    }
}
