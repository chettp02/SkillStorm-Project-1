import React from "react";
import FlightRow from "./FlightRow";
import Flight from "../../models/flight";
import FlightTableColumns from "./FlightTableColumns";
import { Link } from "react-router-dom";

type FlightTableProps = {
  flights: Flight[];
};

type FlightTableState = {};

class FlightTable extends React.Component<FlightTableProps, FlightTableState> {
  render() {
    return (
      <>
        <Link to="/flight_edit">
          <button className="btn btn-primary mx-3">Edit Flight</button>
        </Link>
        <table className="table table-bordered table-striped table-hover table-highlight mx-3">
          <thead>
            <FlightTableColumns />
          </thead>
          <tbody>
            {this.props.flights.map((flight: Flight) => (
              <FlightRow flight={flight} key={flight.Id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default FlightTable;
