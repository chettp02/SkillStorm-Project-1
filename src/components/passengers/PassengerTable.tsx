import React from "react";
import PassengerRow from "./PassengerRow";
import Passenger from "../../models/passenger";
import PassengerTableColumns from "./PassengerTableColumns";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

type PassengerTableProps = {
  passengers: Passenger[];
};

type PassengerTableState = {};

class PassengerTable extends React.Component<
  PassengerTableProps,
  PassengerTableState
> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Link to="/passenger_edit">
          <button className="btn btn-primary mx-3">Edit Passenger</button>
        </Link>
        <table className="table table-bordered table-striped table-hover table-highlight mx-3 lg">
          <thead>
            <PassengerTableColumns />
          </thead>
          <tbody>
            {this.props.passengers.map((passenger: Passenger) => (
              <PassengerRow passenger={passenger} key={passenger.Id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default PassengerTable;
