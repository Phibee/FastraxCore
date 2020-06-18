using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Identity;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastraxCore.API.GraphQL.Types
{
    public class RoleType : ObjectType<Role>
    {
        protected override void Configure(IObjectTypeDescriptor<Role> descriptor)
        {
            descriptor.Field(x => x.Id).Type<IntType>();
            descriptor.Field(x => x.RoleName).Type<StringType>();
        }
    }
}
