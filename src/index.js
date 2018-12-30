import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Form from "/components/Form";
import TravelForm from "/components/TravelForm";

function App() {
  return <TravelForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
