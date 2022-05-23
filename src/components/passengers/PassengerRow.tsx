import React from "react";
import Passenger from "../../models/passenger";
import APIService from "../../services/apiService";

type PassengerRowProps = {
  passenger: Passenger;
};

type PassengerRowState = {
  deletePassenger: number;
  //passenger: Passenger
};

class PassengerRow extends React.Component<
  PassengerRowProps,
  PassengerRowState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      deletePassenger: 0,
      //passenger: {Id: 0, Name: "", Profession: "", Email: "", Age: 0},
    };

    this.deleteFlightButton = this.deleteFlightButton.bind(this);
  }

  deleteFlightButton(id: number) {
    if (window.confirm("Are you sure you want to delete?")) {
      APIService.deletePassenger(id).then((response) => {
        console.log(response);
      });
    }
  }

  render() {
    const passenger = this.props.passenger;
    //let passengerId = `passenger${passenger.Id}`;
    return (
      <React.Fragment key={passenger.Id}>
        <tr>
          <td>{passenger.Id}</td>
          <td>{passenger.Name}</td>
          <td>{passenger.Profession}</td>
          <td>{passenger.Email}</td>
          <td>{passenger.Age}</td>
          <td>
            <button
              onClick={() => this.deleteFlightButton(passenger.Id)}
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

export default PassengerRow;
