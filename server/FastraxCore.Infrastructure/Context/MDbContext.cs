using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FastraxCore.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Identity;

namespace FastraxCore.Infrastructure.Context
{
    public class MDbContext : DbContext
    {
        public MDbContext(DbContextOptions<MDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
                relationship.DeleteBehavior = DeleteBehavior.Restrict;

            base.OnModelCreating(modelBuilder);

            System.Reflection.Assembly assemblyWithConfigurations = GetType().Assembly; //get whatever assembly you want
            modelBuilder.ApplyConfigurationsFromAssembly(assemblyWithConfigurations);
        }
    }
}
