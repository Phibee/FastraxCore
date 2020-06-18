using FastraxCore.Domain.Entities.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Domain.Entities.Settings.Identity;

namespace FastraxCore.Domain.Interfaces.Repositories.Settings
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetSingleByUsername(string username);
    }
}
