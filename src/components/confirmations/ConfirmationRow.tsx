import React from "react";
import Confirmation from "../../models/confirmation";
import APIService from "../../services/apiService";

type ConfirmationRowProps = {
  confirmation: Confirmation;
};

type ConfirmationRowState = {};

class ConfirmationRow extends React.Component<
  ConfirmationRowProps,
  ConfirmationRowState
> {
  constructor(props: any) {
    super(props);

    this.deleteConfirmationButton = this.deleteConfirmationButton.bind(this);
  }

  deleteConfirmationButton(id: number) {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      APIService.deleteConfirmation(id).then((response) => {
        console.log(response);
      });
    }
  }

  render() {
    const confirmation = this.props.confirmation;
    let confirmationId = `confirmation${confirmation.ConfirmationId}`;
    return (
      <React.Fragment key={confirmation.ConfirmationId}>
        <tr id={confirmationId}>
          <td>{confirmation.ConfirmationId}</td>
          <td>{confirmation.PassengerId}</td>
          <td>{confirmation.FlightId}</td>
          <td>
            <button
              onClick={() =>
                this.deleteConfirmationButton(confirmation.ConfirmationId)
              }
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

export default ConfirmationRow;
