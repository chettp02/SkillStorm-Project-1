import { AxiosResponse } from "axios";
import React from "react";
import Confirmation from "../models/confirmation";
import Flight from "../models/flight";
import Passenger from "../models/passenger";
import APIService from "../services/apiService";
import ConfirmationTable from "./confirmations/ConfirmationTable";
import FlightTable from "./flights/FlightTable";
import PassengerTable from "./passengers/PassengerTable";

type HomePageProps = {};

type HomePageState = {
  passengers: Passenger[];
  flights: Flight[];
  confirmations: Confirmation[];
};

class FSHomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      passengers: [],
      flights: [],
      confirmations: [],
    };
  }

  componentDidMount() {
    APIService.getPassengers()
      .then((response: AxiosResponse<Passenger[]>) => {
        this.setState({
          passengers: response.data,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });

    APIService.getFlights()
      .then((response: AxiosResponse<Flight[]>) => {
        this.setState({
          flights: response.data,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });

    APIService.getConfirmations()
      .then((response: AxiosResponse<Confirmation[]>) => {
        this.setState({
          confirmations: response.data,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.passengers !== this.state.passengers) {
      APIService.getPassengers()
        .then((response: AxiosResponse<Passenger[]>) => {
          this.setState({
            passengers: response.data,
          });
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }

    if (prevState.flights !== this.state.flights) {
      APIService.getFlights()
        .then((response: AxiosResponse<Flight[]>) => {
          this.setState({
            flights: response.data,
          });
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }

    if (prevState.confirmations !== this.state.confirmations) {
      APIService.getConfirmations()
        .then((response: AxiosResponse<Confirmation[]>) => {
          this.setState({
            confirmations: response.data,
          });
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <>
        <div>
          <h1 className="text-center my-5">FS Home Page</h1>
          <div className="container center">
            <h3 className="text-center">Passenger's Table</h3>
            <PassengerTable passengers={this.state.passengers} />
          </div>
          <div className="container center">
            <h3 className="text-center my-5">Flight's Table</h3>
            <FlightTable flights={this.state.flights} />
          </div>
          <div className="container">
            <h3 className="text-center my-5">Confirmation Table</h3>
            <ConfirmationTable confirmations={this.state.confirmations} />
          </div>
        </div>
      </>
    );
  }
}

export default FSHomePage;
