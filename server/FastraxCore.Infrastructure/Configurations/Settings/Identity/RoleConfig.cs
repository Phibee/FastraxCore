using FastraxCore.Domain.Entities.Settings;
using FastraxCore.Domain.Entities.Settings.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace FastraxCore.Infrastructure.Configurations
{
    public class RoleConfig : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).ValueGeneratedOnAdd();

            builder.Property(r => r.RoleName)
                    .HasColumnType("varchar(150)")
                    .IsRequired();

            builder.ToTable("Roles", "settings");
        }
    }
}
