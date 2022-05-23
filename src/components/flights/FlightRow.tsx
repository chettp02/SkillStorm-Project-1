import React from "react";
import Flight from "../../models/flight";
import APIService from "../../services/apiService";

type FlightRowProps = {
  flight: Flight;
};

type FlightRowState = {};

class FlightRow extends React.Component<FlightRowProps, FlightRowState> {
  constructor(props: any) {
    super(props);

    this.deleteFlightButton = this.deleteFlightButton.bind(this);
  }

  deleteFlightButton(id: number) {
    if (window.confirm("Are you sure you want to delete?")) {
      APIService.deleteFlight(id).then((response) => {
        console.log(response);
      });
    }
  }

  render() {
    const flight = this.props.flight;
    let flightId = `flight${flight.Id}`;
    return (
      <React.Fragment key={flight.Id}>
        <tr id={flightId}>
          <td>{flight.Id}</td>
          <td>{flight.DepartureDate}</td>
          <td>{flight.ArrivalDate}</td>
          <td>{flight.DepartureTime}</td>
          <td>{flight.ArrivalTime}</td>
          <td>{flight.DepartureAirport}</td>
          <td>{flight.ArrivalAirport}</td>
          <td>{flight.PassengerLimit}</td>
          <td>
            <button
              onClick={() => this.deleteFlightButton(flight.Id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default FlightRow;
