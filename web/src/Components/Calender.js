import React from "react";
import "../styles/Calender.css";
import ProgressBar from "../Components/ProgressBar.js";

let counter = 0;

const Calender = () => {
  return (
    <div className="Calender">
      {data.map((e) => {
        return (
          <div className="CalenderItem" key={counter++}>
            <p>
              {formateDate(e.date)} | {e.name} | {e.amountRegisterd} |{" "}
              {e.maxPlayerCount}
            </p>
            <ProgressBar percentage={Math.random() * 100} />
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    date: randomDate(new Date(2012, 0, 1), new Date()),
    name: "Hi mom",
    amountRegisterd: 13,
    maxPlayerCount: 20,
  },
  {
    date: randomDate(new Date(2012, 0, 1), new Date()),
    name: "Op Antaris ist kacke",
    amountRegisterd: 8,
    maxPlayerCount: 10,
  },
  {
    date: randomDate(new Date(2012, 0, 1), new Date()),
    name: "Op Benchi ist nen dumme nutte",
    amountRegisterd: 2,
    maxPlayerCount: 20,
  },
];

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function formateDate(date) {
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
}

console.log(randomDate(new Date(2012, 0, 1), new Date()));

export default Calender;
