using Microsoft.EntityFrameworkCore.Migrations;

namespace FastraxCore.Infrastructure.Migrations
{
    public partial class AddIsActive : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                schema: "settings",
                table: "AccessModules",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                schema: "settings",
                table: "AccessModules");
        }
    }
}
