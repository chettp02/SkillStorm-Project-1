import React, { useState } from "react";
import APIService from "../../services/apiService";

const EditFlight = () => {
  const initialFlightState = {
    Id: 0,
    DepartureDateAndTime: "",
    ArrivalDateAndTime: "",
    DepartureDate: "",
    ArrivalDate: "",
    DepartureTime: "",
    ArrivalTime: "",
    DepartureAirport: "",
    ArrivalAirport: "",
    PassengerLimit: 0,
    Passengers: [],
  };
  const [flight, setFlight] = useState(initialFlightState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFlight({ ...flight, [name]: value });
  };
  const saveFlight = () => {
    var data = {
      Id: flight.Id,
      DepartureDateAndTime: flight.DepartureDateAndTime,
      ArrivalDateAndTime: flight.ArrivalDateAndTime,
      DepartureDate: flight.DepartureDate,
      ArrivalDate: flight.ArrivalDate,
      DepartureTime: flight.DepartureTime,
      ArrivalTime: flight.ArrivalTime,
      DepartureAirport: flight.DepartureAirport,
      ArrivalAirport: flight.ArrivalAirport,
      PassengerLimit: flight.PassengerLimit,
      Passengers: flight.Passengers,
    };
    APIService.updateFlight(data)
      .then((response: any) => {
        setFlight({
          Id: response.data.Id,
          DepartureDateAndTime: response.data.DepartureDateAndTime,
          ArrivalDateAndTime: response.data.ArrivalDateAndTime,
          DepartureDate: "",
          ArrivalDate: "",
          DepartureTime: "",
          ArrivalTime: "",
          DepartureAirport: response.data.DepartureAirport,
          ArrivalAirport: response.data.ArrivalAirport,
          PassengerLimit: response.data.PassengerLimit,
          Passengers: [],
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newFlight = () => {
    setFlight(initialFlightState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form mx-3">
      {submitted ? (
        <div>
          <h4>You submitted updated!</h4>
          <button className="btn btn-success" onClick={newFlight}>
            Edit More
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-center my-5">Edit Flight</h1>
          <div className="form-group">
            <label htmlFor="FlightId">
              Flight ID
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              required
              value={flight.Id}
              onChange={handleInputChange}
              name="Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="DepartureDateAndTime">
              Departure Date and Time ('yyyy-MM-dd'T'HH:mm:ss')
            </label>
            <input
              type="text"
              className="form-control"
              id="DepartureDateAndTime"
              required
              value={flight.DepartureDateAndTime}
              onChange={handleInputChange}
              name="DepartureDateAndTime"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ArrivalDateAndTime">
              Arrival Date and Time ('yyyy-MM-dd'T'HH:mm:ss')
            </label>
            <input
              type="text"
              className="form-control"
              id="ArrivalDateAndTime"
              required
              value={flight.ArrivalDateAndTime}
              onChange={handleInputChange}
              name="ArrivalDateAndTime"
            />
          </div>
          <div className="form-group">
            <label htmlFor="DepartureAirport">Departure Airport</label>
            <input
              type="text"
              className="form-control"
              id="DepartureAirport"
              required
              value={flight.DepartureAirport}
              onChange={handleInputChange}
              name="DepartureAirport"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ArrivalAirport">Arrival Airport</label>
            <input
              type="text"
              className="form-control"
              id="ArrivalAirport"
              required
              value={flight.ArrivalAirport}
              onChange={handleInputChange}
              name="ArrivalAirport"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PassengerLimit">Passenger Limit</label>
            <input
              type="text"
              className="form-control"
              id="PassengerLimit"
              required
              value={flight.PassengerLimit}
              onChange={handleInputChange}
              name="PassengerLimit"
            />
          </div>
          <button onClick={saveFlight} className="btn btn-success my-3">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default EditFlight;
