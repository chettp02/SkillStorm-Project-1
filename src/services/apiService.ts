import Confirmation from "../models/confirmation";
import Flight from "../models/flight";
import Passenger from "../models/passenger";
import axios from "axios";

const http = axios.create({
  baseURL: "https://localhost:7219",
  headers: {
    "Content-Type": "application/json",
  },
});

const getConfirmations = () => {
  return http.get<Array<Confirmation>>("/api/Confirmations");
};

const getConfirmation = (id: number) => {
  return http.get<Confirmation>(`/api/Confirmations/${id}`);
};

const createConfirmation = (confirmation: Confirmation) => {
  return http.post<Confirmation>("/api/Confirmations", confirmation);
};

const updateConfirmation = (confirmation: Confirmation) => {
  return http.put<Confirmation>(
    `/api/Confirmations/${confirmation.ConfirmationId}`,
    confirmation
  );
};

const deleteConfirmation = (id: number) => {
  return http.delete<Confirmation>(`/api/Confirmations/${id}`);
};

const getFlights = () => {
  return http.get<Array<Flight>>("/api/Flights");
};

const getFlight = (id: number) => {
  return http.get<Flight>(`/api/Flights/${id}`);
};

const createFlight = (flight: Flight) => {
  return http.post<Flight>("/api/Flights", flight);
};

const updateFlight = (flight: Flight) => {
  return http.put<Flight>(`/api/Flights/${flight.Id}`, flight);
};

const deleteFlight = (id: number) => {
  return http.delete<Flight>(`/api/Flights/${id}`);
};

const getPassengers = () => {
  return http.get<Array<Passenger>>("/api/Passengers");
};

const getPassenger = (id: number) => {
  return http.get<Passenger>(`/api/Passengers/${id}`);
};

const createPassenger = (passenger: Passenger) => {
  return http.post<Passenger>("/api/Passengers", passenger);
};

const updatePassenger = (passenger: Passenger) => {
  return http.put<Passenger>(`/api/Passengers/${passenger.Id}`, passenger);
};

const deletePassenger = (id: number) => {
  return http.delete<Passenger>(`/api/Passengers/${id}`);
};

const APIService = {
  getConfirmations,
  getConfirmation,
  createConfirmation,
  updateConfirmation,
  deleteConfirmation,
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight,
  getPassengers,
  getPassenger,
  createPassenger,
  updatePassenger,
  deletePassenger,
};

export default APIService;
