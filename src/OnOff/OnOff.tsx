import React, {useState} from "react";

type OnOffPropsType = {
    setOn: (on: boolean) => void
    on: boolean
}

export function OnOff(props: OnOffPropsType) {

    // hook with init value

    const OnStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white" // тринароное виражение
    }
    const OffStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const IndicatorStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "orange" : "white"

    }


    return <div>
        <div style={OnStyle} onClick={() => {
            props.setOn(!props.on)
        }}>On
        </div>
        <div style={OffStyle} onClick={() => {
            props.setOn(!props.on)
        }}>Off
        </div>
        <div style={IndicatorStyle}></div>
    </div>
}