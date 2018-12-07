using System;
using Core;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<State> States {get;set;}

        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }
    }
}
