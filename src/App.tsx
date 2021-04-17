import React, {useState} from 'react';
import {Accordion} from './Acordion/Accordion';
import './App.css';
import {Rating, RatingValueType} from "./Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UnControlAccordion} from "./Acordion/UncontroleAccordion";
import {UnControlRating} from "./Rating/UnControledRating";
import {UnControlledOnOff} from "./OnOff/UncontroledOnOff";
import {Select} from "./Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on,setOn] = useState<boolean>(true)
    return (
        <div className={"App"}>
            <OnOff on={on} setOn={setOn}/>

            <UnControlAccordion titleValue={"MENU"}/>
        {/*    <Accordion items={['Dimuch','Valera','Artem']}  titleValue={"Menu2"} collapsed={collapsed} onChange={() => {setCollapsed(!collapsed)}} />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UnControlledOnOff onChange={setOn}/> {on.toString()}

        </div>
    );
}

export default App;
