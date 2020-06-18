using FastraxCore.Domain.Entities.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FastraxCore.Infrastructure.Configurations.Settings.Modules
{
    public class AccessModuleConfig: IEntityTypeConfiguration<AccessModule>
    {
        public void Configure(EntityTypeBuilder<AccessModule> builder)
        {
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).ValueGeneratedOnAdd();

            builder.Property(r => r.ModuleName).IsRequired();
            
            builder.HasOne(b => b.ParentAccessModule)
                .WithMany(b => b.Children)
                .HasForeignKey(b => b.ParentAccessModuleId);

            builder.ToTable("AccessModules", "settings");
        }
    }
}