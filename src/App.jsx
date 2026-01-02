import React from "react";
import AllMailBoxes from "./pages/mailBoxList/mailBoxList";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import CreateMailBox from "./pages/mailBoxForm/mailBoxForm";
import Homepage from "./pages/home/home";
import MailBoxDetails from "./pages/mailBoxDetails/mailBoxDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mailBoxes" element={<AllMailBoxes />} />
        <Route path="/mailBoxes/:id" element={<MailBoxDetails />} />
        <Route path="/mailBoxes/create" element={<CreateMailBox />} />
      </Routes>
    </div>
  );
}

export default App;
