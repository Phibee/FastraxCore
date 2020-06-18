using FastraxCore.Domain.Entities.Settings.Modules;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FastraxCore.Infrastructure.Configurations.Settings.Modules
{
    public class AccessModuleCustomConfig: IEntityTypeConfiguration<AccessModuleCustom>
    {
        public void Configure(EntityTypeBuilder<AccessModuleCustom> builder)
        {
            builder.HasKey(amc => amc.Id);
            builder.Property(amc => amc.Id).ValueGeneratedOnAdd();

            builder.Property(amc => amc.RoleId).IsRequired();
            builder.Property(amc => amc.AccessModuleId).IsRequired();
            builder.Property(amc => amc.IsEnable).IsRequired();
            builder.Property(amc => amc.UserId).IsRequired();

            builder.HasOne(amc => amc.Role)
                    .WithMany()
                    .HasForeignKey(amc => amc.RoleId);
            
            builder.HasOne(amc => amc.AccessModule)
                    .WithMany()
                    .HasForeignKey(amc => amc.AccessModuleId);
            
            builder.HasOne(amc => amc.User)
                    .WithMany()
                    .HasForeignKey(amc => amc.UserId);

            builder.ToTable("AccessModulesCustom", "settings");
        }
    }
}