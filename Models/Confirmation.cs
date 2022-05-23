using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightService.Models {
    public class Confirmation {

        //Creates a custom GUID to be the passenger's unique flight confirmation number
        //Everytime a customer purchases a flight, they will be assigned another number
        //One passenger can have multiple confirmation numbers. Confirmation numbers can only have one person
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConfirmationId { get; set; }

        [ForeignKey("Passenger")]
        public int PassengerId { get; set; }
        //Reference navigation
        public Passenger? Passenger { get; set; }

        [ForeignKey("Flight")]
        public int FlightId { get; set; }
        //Reference navigation
        public Flight? Flight { get; set; }
    }
}
