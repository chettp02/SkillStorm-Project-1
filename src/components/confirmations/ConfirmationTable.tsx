import React from "react";
import ConfirmationRow from "./ConfirmationRow";
import Confirmation from "../../models/confirmation";
import ConfirmationTableColumns from "./ConfirmationTableColumns";
import { Link } from "react-router-dom";

type ConfirmationTableProps = {
  confirmations: Confirmation[];
};

type ConfirmationTableState = {};

class ConfirmationTable extends React.Component<
  ConfirmationTableProps,
  ConfirmationTableState
> {
  render() {
    return (
      <>
        <Link to="/confirmation_edit">
          <button className="btn btn-primary mx-3">Edit Confirmation</button>
        </Link>
        <table className="table table-bordered table-striped table-hover table-highlight mx-3">
          <thead>
            <ConfirmationTableColumns />
          </thead>
          <tbody>
            {this.props.confirmations.map((confirmation: Confirmation) => (
              <ConfirmationRow
                confirmation={confirmation}
                key={confirmation.ConfirmationId}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ConfirmationTable;
