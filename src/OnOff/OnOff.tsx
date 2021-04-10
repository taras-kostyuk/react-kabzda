import React, {useState} from "react";
type OnOffPropsType = {

}

export function OnOff(props:OnOffPropsType) {

    let [on,setOn] = useState(false) // hook with init value

    const OnStyle = {
        width: "30px",
        height: "30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: on ? "green" : "white" // тринароное виражение
    }
    const OffStyle = {  width: "30px",
        height: "30px",
        border:"1px solid black",
        display:"inline-block",
        marginRight:"5px",
        padding:"2px",
        backgroundColor:on  ? "white" : "red"
    }
    const IndicatorStyle = {
        width:"20px",
        height:"20px",
        border:"1px solid black",
        borderRadius:"5px",
        display:"inline-block",
        marginLeft:"10px",
        backgroundColor: on ? "orange" : "white"

    }


    return <div>
        <div style={OnStyle} onClick={() => {setOn(true)}}>On</div>
        <div style={OffStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={IndicatorStyle}></div>
    </div>
}