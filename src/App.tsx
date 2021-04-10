import React from 'react';
import { Accordion } from './Acordion/Accordion';
import './App.css';
import {Rating} from "./Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UnControlAccordion} from "./Acordion/UncontroleAccordion";
import {UnControlRating} from "./Rating/UnControledRating";

function App() {
  return (
    <div>
        <OnOff />
        <OnOff />
        <OnOff />
        <OnOff />

      <UnControlAccordion titleValue={"MENU"}  />
      <UnControlAccordion titleValue={"USER"}  />

        <UnControlRating />

    </div>
  );
}

export default App;
