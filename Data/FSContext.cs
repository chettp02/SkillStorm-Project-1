using FlightService.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightService.Data {
    public class FSContext : DbContext {

        public FSContext() { }

        //Creates a constructor for FSContexts that passes in an instance off DbContext Options as a variable to be used in our program class
        public FSContext(DbContextOptions<FSContext> options) : base(options) { }

        //Initializes the Data-base sets (SQL tables)
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<Confirmation> Confirmations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            //Sets up the navigation properties between the passenger/flight dbsets and the confirmation dbset
            modelBuilder.Entity<Passenger>()
                .HasMany(p => p.Flights)
                .WithMany(c => c.Passengers)
                .UsingEntity<Confirmation>();
                

            modelBuilder.Entity<Flight>()
                .HasMany(p => p.Passengers)
                .WithMany(c => c.Flights)
                .UsingEntity<Confirmation>();
        }
    }
}
