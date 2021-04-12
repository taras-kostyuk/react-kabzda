import React, {useState} from 'react';
import {Accordion} from './Acordion/Accordion';
import './App.css';
import {Rating, RatingValueType} from "./Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UnControlAccordion} from "./Acordion/UncontroleAccordion";
import {UnControlRating} from "./Rating/UnControledRating";
import {UnControlledOnOff} from "./OnOff/UncontroledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [collapsed, setCollapsed] = useState(false)
    let [on,setOn] = useState(true)
    return (
        <div className={"App"}>
            <UnControlledOnOff/>
            <OnOff on={on} setOn={setOn}/>

            <UnControlAccordion titleValue={"MENU"}/>
            <Accordion titleValue={"Menu2"} value={collapsed} onClick={setCollapsed} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlRating/>

        </div>
    );
}

export default App;
