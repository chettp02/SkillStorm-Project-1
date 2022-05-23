interface Flight {
  Id: number;
  DepartureDateAndTime: string;
  ArrivalDateAndTime: string;
  DepartureDate: string;
  ArrivalDate: string;
  DepartureTime: string;
  ArrivalTime: string;
  DepartureAirport: string;
  ArrivalAirport: string;
  PassengerLimit: number;
  Passengers: any[];
}

export default Flight;
