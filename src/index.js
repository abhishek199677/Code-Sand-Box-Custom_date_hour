import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2023, 9, 21, 16);
const currentTime = date.getHours();

let greeting;

const CustomStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  CustomStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
  CustomStyle.color = "green";
} else {
  greeting = "Good night";
  CustomStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={CustomStyle}>{greeting}</h1>,

  document.getElementById("root")
);
