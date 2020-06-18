using FastraxCore.Domain.Interfaces.Repositories;
using FastraxCore.Domain.Interfaces.Repositories.Settings;
using FastraxCore.Domain.Interfaces.Services;
using FastraxCore.Domain.Services;
using FastraxCore.Infrastructure.Context;
using FastraxCore.Infrastructure.Repositories;
using FastraxCore.Infrastructure.Repositories.Settings;
using HotChocolate;
using HotChocolate.Execution.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FastraxCore.Domain.Interfaces.Repositories.Settings.Modules;
using FastraxCore.Infrastructure.Repositories.Settings.Modules;

namespace FastraxCore.API.Helpers.Extensions
{
    public enum SQLDbProvider
    {
        MSSQL,
        MYSQL
    }

    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Applies collection of DI services 
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection ApplyServices(this IServiceCollection services)
        {
            services.AddScoped<IEncryptionService, EncryptionService>();
            services.AddScoped<IMembershipService, MembershipService>();

            services.AddTransient(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IRoleRepository, RoleRepository>();
            services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            services.AddTransient<IDesignationRepository, DesignationRepository>();
            services.AddTransient<IAccessModuleRepository, AccessModuleRepository>();
            services.AddTransient<IAccessModuleDefaultRepository, AccessModuleDefaultRepository>();
            services.AddTransient<IAccessModuleCustomRepository, AccessModuleCustomRepository>();

            return services;
        }

        /// <summary>
        /// Applies GraphQL Implementation
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection ApplyGraphQLService(this IServiceCollection services)
        {
            var schemaBuild = SchemaBuilder.New().ModifyOptions(opt => opt.UseXmlDocumentation = true);

            // Types
            var types = Assembly.GetEntryAssembly().GetTypes().Where(t => t.Namespace == "FastraxCore.API.GraphQL.Types" && t.IsClass && t.DeclaringType == null).ToList();
            types.ForEach(_type => schemaBuild.AddType(_type));

            // Queries
            var queries = Assembly.GetExecutingAssembly().GetTypes().Where(t => t.Namespace == "FastraxCore.API.GraphQL.Query" && t.IsClass && t.DeclaringType == null).ToList();
            queries.ForEach(_type => schemaBuild.AddQueryType(_type));

            // Mutations
            var mutations = Assembly.GetExecutingAssembly().GetTypes().Where(t => t.Namespace == "FastraxCore.API.GraphQL.Mutations" && t.IsClass && t.DeclaringType == null).ToList();
            mutations.ForEach(_type => schemaBuild.AddMutationType(_type));

            services.AddGraphQL(s => schemaBuild.AddServices(s).Create(),
                new QueryExecutionOptions { TracingPreference = TracingPreference.OnDemand }
            );

            return services;
        }

        /// <summary>
        /// Defines your MDBContext Connection String
        /// </summary>
        /// <param name="services"></param>
        /// <param name="connectionString">Connection String</param>
        /// <param name="provider">Specify SQL Provider, default provider is MSSQL</param>
        /// <returns></returns>
        public static IServiceCollection AddContextConnection(this IServiceCollection services, string connectionString, SQLDbProvider provider = SQLDbProvider.MSSQL)
        {
            if (string.IsNullOrEmpty(connectionString))
                throw new Exception("Please define your connection string.");

            services.AddDbContext<MDbContext>(options =>
            {
                if (provider == SQLDbProvider.MSSQL)
                    options.UseSqlServer(connectionString);
            });

            return services;
        }

    }
}
