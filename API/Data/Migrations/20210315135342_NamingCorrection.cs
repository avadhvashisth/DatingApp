﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class NamingCorrection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "KnowAs",
                table: "Users",
                newName: "KnownAs");

            migrationBuilder.RenameColumn(
                name: "Intrests",
                table: "Users",
                newName: "Interests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "KnownAs",
                table: "Users",
                newName: "KnowAs");

            migrationBuilder.RenameColumn(
                name: "Interests",
                table: "Users",
                newName: "Intrests");
        }
    }
}
