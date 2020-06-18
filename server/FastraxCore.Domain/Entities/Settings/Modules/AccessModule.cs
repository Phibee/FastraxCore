using System;
using System.Collections.Generic;
using System.Text;
using FastraxCore.Domain.Entities.Settings.Modules;

namespace FastraxCore.Domain.Entities.Settings
{
    public class AccessModule
    {
        public long Id { get; set; }
        public string ModuleName { get; set; }
        public long? ParentAccessModuleId { get; set; }
        public bool IsActive { get; set; }


        public virtual AccessModule ParentAccessModule { get; set; }
        public virtual ICollection<AccessModule> Children { get; set; }
    }
}
