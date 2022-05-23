import React, { useState } from "react";
import APIService from "../../services/apiService";

const AddPassenger = () => {
  const initialPassengerState = {
    Id: 0,
    Name: "",
    Profession: "",
    Email: "",
    Age: 0,
  };
  const [passenger, setPassenger] = useState(initialPassengerState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setPassenger({ ...passenger, [name]: value });
  };
  const savePassenger = () => {
    var data = {
      Id: passenger.Id,
      Name: passenger.Name,
      Profession: passenger.Profession,
      Email: passenger.Email,
      Age: passenger.Age,
    };
    APIService.createPassenger(data)
      .then((response: any) => {
        setPassenger({
          Id: response.data.Id,
          Name: response.data.Name,
          Profession: response.data.Profession,
          Email: response.data.Email,
          Age: response.data.Age,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newPassenger = () => {
    setPassenger(initialPassengerState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form mx-3">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPassenger}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-center my-5">Add Passenger</h1>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              required
              value={passenger.Name}
              onChange={handleInputChange}
              name="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Profession">Profession</label>
            <input
              type="text"
              className="form-control"
              id="Profession"
              required
              value={passenger.Profession}
              onChange={handleInputChange}
              name="Profession"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              required
              value={passenger.Email}
              onChange={handleInputChange}
              name="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Age">Age</label>
            <input
              type="text"
              className="form-control"
              id="Age"
              required
              value={passenger.Age}
              onChange={handleInputChange}
              name="Age"
            />
          </div>
          <button onClick={savePassenger} className="btn btn-success my-3">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddPassenger;
