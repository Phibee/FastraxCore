using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using HotChocolate.Types;

namespace FastraxCore.API.GraphQL.Types
{
    
    public class AccessModuleType : ObjectType<AccessModule>
    {
        protected override void Configure(IObjectTypeDescriptor<AccessModule> descriptor)
        {
            descriptor.Field(x => x.Id).Type<IntType>();
            descriptor.Field(x => x.ModuleName).Type<StringType>();
            
//            descriptor.Field(x => x.Children).Resolver(
//                ctx => ctx.Service<IAccessModuleRepository>().GetSingle(d => d.Id == ctx.Parent<AccessModule>().ParentAccessModuleId));
        }
    }
}