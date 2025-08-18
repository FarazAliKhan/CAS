using DataLayer.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Context
{
    public class CASContext : DbContext, ICASContext
    {
        public CASContext(DbContextOptions<CASContext> options)
      : base(options)
        { }

        public DbSet<CASEntity> cases { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            DateTime dob = new DateTime(2000, 01, 01);
            DateTime seedDate = new DateTime(2025, 08, 16);

            modelBuilder.Entity<CASEntity>(b =>
                b.HasData(new CASEntity()
                {
                    Id = 1,
                    FirstName = "a",
                    LastName = "b",
                    DateOfBirth = dob,
                    CreatedDate = seedDate,
                    ModeifiedDate = null
                })
            );
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=CASDB;Trusted_Connection=True;");
        //}
    }
}
