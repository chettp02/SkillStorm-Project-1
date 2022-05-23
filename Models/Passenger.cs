namespace FlightService.Models {
    public class Passenger {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Profession { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int Age { get; set; }

        //Creates a new collection to store the flight confirmations for each passenger
        public ICollection<Flight>? Flights { get; set; } = new List<Flight>();
    }  
}
