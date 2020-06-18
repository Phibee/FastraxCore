using FastraxCore.Domain.Entities.Settings.Modules;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FastraxCore.Infrastructure.Configurations.Settings.Modules
{
    public class AccessModuleDefaultConfig : IEntityTypeConfiguration<AccessModuleDefault>
    {
        public void Configure(EntityTypeBuilder<AccessModuleDefault> builder)
        {
            builder.HasKey(amd => amd.Id);
            builder.Property(amd => amd.Id).ValueGeneratedOnAdd();

            builder.Property(amd => amd.RoleId).IsRequired();
            builder.Property(amd => amd.AccessModuleId).IsRequired();
            builder.Property(amd => amd.IsEnable).IsRequired();
            
            builder.HasOne(amd => amd.Role)
                    .WithMany()
                    .HasForeignKey(amd => amd.RoleId);
            
            builder.HasOne(amd => amd.AccessModule)
                    .WithMany()
                    .HasForeignKey(amd => amd.AccessModuleId);

            builder.ToTable("AccessModulesDefault", "settings");
        }
    }
}