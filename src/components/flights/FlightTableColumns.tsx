export const FlightTableColumns = (props: any): JSX.Element => {
  return (
    <>
      <tr>
        <th scope="col">Flight Number</th>
        <th scope="col">Departure Date</th>
        <th scope="col">Arrival Date</th>
        <th scope="col">Departure Time</th>
        <th scope="col">Arrival Time</th>
        <th scope="col">Departure Airport</th>
        <th scope="col">Arrival Airport</th>
        <th scope="col">Passenger Limit</th>
      </tr>
    </>
  );
};

export default FlightTableColumns;
