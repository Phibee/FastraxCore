using Microsoft.EntityFrameworkCore.Migrations;

namespace FastraxCore.Infrastructure.Migrations
{
    public partial class AddModuleDefaultAndCustom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccessModulesCustom",
                schema: "settings",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccessModuleId = table.Column<long>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    UserId = table.Column<long>(nullable: false),
                    IsEnable = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessModulesCustom", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccessModulesCustom_AccessModules_AccessModuleId",
                        column: x => x.AccessModuleId,
                        principalSchema: "settings",
                        principalTable: "AccessModules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccessModulesCustom_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "settings",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccessModulesCustom_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "settings",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AccessModulesDefault",
                schema: "settings",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccessModuleId = table.Column<long>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    IsEnable = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessModulesDefault", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccessModulesDefault_AccessModules_AccessModuleId",
                        column: x => x.AccessModuleId,
                        principalSchema: "settings",
                        principalTable: "AccessModules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccessModulesDefault_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "settings",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccessModulesCustom_AccessModuleId",
                schema: "settings",
                table: "AccessModulesCustom",
                column: "AccessModuleId");

            migrationBuilder.CreateIndex(
                name: "IX_AccessModulesCustom_RoleId",
                schema: "settings",
                table: "AccessModulesCustom",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AccessModulesCustom_UserId",
                schema: "settings",
                table: "AccessModulesCustom",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AccessModulesDefault_AccessModuleId",
                schema: "settings",
                table: "AccessModulesDefault",
                column: "AccessModuleId");

            migrationBuilder.CreateIndex(
                name: "IX_AccessModulesDefault_RoleId",
                schema: "settings",
                table: "AccessModulesDefault",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccessModulesCustom",
                schema: "settings");

            migrationBuilder.DropTable(
                name: "AccessModulesDefault",
                schema: "settings");
        }
    }
}
