using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlightService.Migrations
{
    public partial class UpdateConfirmationModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Confirmations",
                table: "Confirmations");

            migrationBuilder.DropColumn(
                name: "Number",
                table: "Confirmations");

            migrationBuilder.AddColumn<int>(
                name: "ConfirmationId",
                table: "Confirmations",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Confirmations",
                table: "Confirmations",
                column: "ConfirmationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Confirmations",
                table: "Confirmations");

            migrationBuilder.DropColumn(
                name: "ConfirmationId",
                table: "Confirmations");

            migrationBuilder.AddColumn<Guid>(
                name: "Number",
                table: "Confirmations",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Confirmations",
                table: "Confirmations",
                column: "Number");
        }
    }
}
