import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/navigationBar";
import { Route, Routes } from "react-router-dom";
import AddFlight from "./components/flights/addFlight";
import FSHomePage from "./components/FSHomePage";
import AddPassenger from "./components/passengers/addPassenger";
import AddConfirmation from "./components/confirmations/addConfirmation";
import EditFlight from "./components/flights/editFlight";
import EditPassenger from "./components/passengers/editPassenger";
import EditConfirmation from "./components/confirmations/editConfirmation";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<FSHomePage />} />
        <Route path="/passenger" element={<AddPassenger />} />
        <Route path="/flight" element={<AddFlight />} />
        <Route path="/confirmation" element={<AddConfirmation />} />
        <Route path="/flight_edit" element={<EditFlight />} />
        <Route path="/passenger_edit" element={<EditPassenger />} />
        <Route path="/confirmation_edit" element={<EditConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
