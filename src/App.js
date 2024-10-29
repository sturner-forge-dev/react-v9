import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Americano",
      description: "A pizza with french fries and hotdogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "A pizza with ham and pineapple",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "A pizza with chicken nuggets",
    }),
    React.createElement(Pizza, {
      name: "The Baked Potato",
      description: "A pizza with potatoes and bacon",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(React.createElement(App));
