using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Modules;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using HotChocolate.Types;

namespace FastraxCore.API.GraphQL.Types
{
    public class AccessModuleDefaultType : ObjectType<AccessModuleDefault>
    {
        protected override void Configure(IObjectTypeDescriptor<AccessModuleDefault> descriptor)
        {
            descriptor.Field(x => x.Id).Type<IntType>();
            descriptor.Field(x => x.RoleId).Type<IntType>();
            descriptor.Field(x => x.IsEnable).Type<BooleanType>();
            
            descriptor.Field(x => x.AccessModule).Resolver(
                ctx => ctx.Service<IAccessModuleRepository>().GetSingle(d => d.Id == ctx.Parent<AccessModuleDefault>().AccessModuleId));
        }
    }
}