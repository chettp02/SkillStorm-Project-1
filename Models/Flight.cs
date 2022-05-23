using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FlightService.Models {
    public class Flight {
        public int Id { get; set; }

        //Makes sure the the DepatureDataAndTime attribute is not added as a value in the SQL tabel
        [NotMapped]
        public DateTime DepartureDateAndTime { get; set; }

        [NotMapped]
        public DateTime ArrivalDateAndTime { get; set; }

        //Creates empty string variables to be set by the below function
        private string _DepartureDate = string.Empty;
        private string _ArrivalDate = string.Empty;
        private string _DepartureTime = string.Empty;
        private string _ArrivalTime = string.Empty;

        //Splits the DepartureDateAndTime DateTime variable in half and converts it into a string
        public string DepartureDate {
            get { return _DepartureDate; }
            set { _DepartureDate = DepartureDateAndTime.ToString("yyyy-MM-dd"); } 
        }

        public string ArrivalDate {
            get { return _ArrivalDate; }
            set { _ArrivalDate = ArrivalDateAndTime.ToString("yyyy-MM-dd"); } 
        }

        public string DepartureTime {
            get { return _DepartureTime; }
            set { _DepartureTime = DepartureDateAndTime.ToString("HH:mm:ss"); }
        }

        public string ArrivalTime {
            get { return _ArrivalTime; }
            set { _ArrivalTime = ArrivalDateAndTime.ToString("HH:mm:ss"); }
        }

        public string DepartureAirport { get; set; } = string.Empty;
        public string ArrivalAirport { get; set; } = string.Empty;
        public int PassengerLimit { get; set; }

        //Creates a new collection to keep track of which passengers are on the flight
        //One flight can have many passengers. One passenger can also have many flights
        public ICollection<Passenger>? Passengers { get; set; } = new List<Passenger>();

    }
}
