import React from "react";

export const PassengerTableColumns = (props: any): JSX.Element => {
  return (
    <>
      <tr>
        <th scope="col">Passenger ID</th>
        <th scope="col">Name</th>
        <th scope="col">Profession</th>
        <th scope="col">Email</th>
        <th scope="col">Age</th>
      </tr>
    </>
  );
};

export default PassengerTableColumns;
