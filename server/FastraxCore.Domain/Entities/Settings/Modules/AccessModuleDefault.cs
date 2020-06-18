using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Domain.Entities.Settings.Identity;

namespace FastraxCore.Domain.Entities.Settings.Modules
{
    public class AccessModuleDefault
    {
        public long Id { get; set; }
        public long AccessModuleId { get; set; }
        public int RoleId { get; set; }
        public bool IsEnable { get; set; }

        public virtual AccessModule AccessModule { get; set; }
        public virtual Role Role { get; set; }
    }
}
