import React from "react";
import Flight from "../../models/flight";
import Passenger from "../../models/passenger";
import APIService from "../../services/apiService";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Confirmation from "../../models/confirmation";

class EditConfirmation extends React.Component {
  constructor(props: any) {
    super(props);

    this.onSelectConfirmationId = this.onSelectConfirmationId.bind(this);
    this.onSelectPassengerId = this.onSelectPassengerId.bind(this);
    this.onSelectFlightId = this.onSelectFlightId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    confirmations: [],
    passengers: [],
    flights: [],
    confirmationId: 0,
    passengerId: 0,
    flightId: 0,
    passengerCount: 0,
    passengerLimit: 0,
  };

  componentDidMount() {
    APIService.getConfirmations()
      .then((response) => {
        const confirmations = response.data;
        this.setState({ confirmations });
      })
      .catch((err: Error) => {
        console.log(err);
      });

    //creates an axios API service request that will send a get request to the api requesting for all of the passengers. The passengers array is stored in the state
    APIService.getPassengers()
      .then((response) => {
        const passengers = response.data;
        this.setState({ passengers });
        const passengerId = response.data[0].Id;
        this.setState({ passengerId });
      })
      .catch((err: Error) => {
        console.log(err);
      });

    //creates an axios API service request that will send a get request to the api requesting for all of the flights. The flights array is stored in the state
    APIService.getFlights()
      .then((response) => {
        const flights = response.data;
        this.setState({ flights });
        const flightId = response.data[0].Id;
        this.setState({ flightId });
        const passengerCount = response.data[0].Passengers.length;
        //console.log(passengerCount);
        this.setState({ passengerCount });
        const passengerLimit = response.data[0].PassengerLimit;
        //console.log(passengerLimit);
        this.setState({ passengerLimit });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  onSelectConfirmationId(e: any) {
    this.setState({ confirmationId: e.target.value });
    console.log(e.target.value);
  }

  onSelectPassengerId(e: any) {
    this.setState({ passengerId: e.target.value });
    console.log(e.target.value);
  }

  onSelectFlightId(e: any) {
    this.setState({ flightId: e.target.value });
    console.log(e.target.value);
    APIService.getFlight(e.target.value).then((result) => {
      const passengerCount = result.data.Passengers.length;
      this.setState({ passengerCount });
      console.log(passengerCount);
      const passengerLimit = result.data.PassengerLimit;
      console.log(passengerLimit);
      this.setState({ passengerLimit });
    });
  }

  onSubmit() {
    const confirmationObject = {
      ConfirmationId: this.state.confirmationId,
      PassengerId: this.state.passengerId,
      FlightId: this.state.flightId,
    };
    console.log(this.state.confirmationId);
    console.log(this.state.passengerId);
    console.log(this.state.flightId);
    if (this.state.passengerCount >= this.state.passengerLimit) {
      window.alert("This flight is full, please choose another");
      return;
    } else {
      APIService.updateConfirmation(confirmationObject)
        .then((result) => {
          console.log(result.data);
          window.alert("Your edit was successful!");
        })
        .catch((error) => {
          window.alert("You must select from the dropdown menus!");
          console.log(error);
        });
      const passengerCount = this.state.passengerCount + 1;
      this.setState({ passengerCount });
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center my-5">Edit Confirmation</h1>
        <p className="mx-3">Select the Confirmation ID</p>
        <select onChange={this.onSelectConfirmationId} className="mx-3">
          {this.state.confirmations.map((confirmation: Confirmation) => (
            <option
              key={confirmation.ConfirmationId}
              value={confirmation.ConfirmationId}
            >
              {confirmation.ConfirmationId}
            </option>
          ))}
        </select>
        <p className="mt-5 mx-3">Select the Passenger</p>
        <select onChange={this.onSelectPassengerId} className="mx-3">
          {/* creates a map of the passengers array that is passed into a drop-down menu. It specifically pulls the passenger name from the passengers[] */}
          {this.state.passengers.map((passenger: Passenger) => (
            <option key={passenger.Id} value={passenger.Id}>
              {passenger.Id + " " + passenger.Name}
            </option>
          ))}
        </select>
        <p className="mt-5 mx-3">Select the Flight ID</p>
        <select onChange={this.onSelectFlightId} className="mx-3">
          {this.state.flights.map((flight: Flight) => (
            <option key={flight.Id} value={flight.Id}>
              {flight.Id +
                " " +
                flight.DepartureAirport +
                " to " +
                flight.ArrivalAirport}
            </option>
          ))}
        </select>
        <div>
          <Button
            onClick={this.onSubmit}
            className="mt-5 mx-3"
            variant="success"
          >
            Update
          </Button>
        </div>
      </div>
    );
  }
}

export default EditConfirmation;
