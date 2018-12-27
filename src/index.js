import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Form from "/components/Form";

function App() {
  return <Form />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
