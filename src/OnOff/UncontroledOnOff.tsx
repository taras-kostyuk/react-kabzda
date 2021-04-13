import React, {useState} from "react";
type OnOffPropsType = {
    onChange: (on:boolean)=> void
    defaultOn?:boolean
}

export function UnControlledOnOff(props:OnOffPropsType) {

    let [on,setOn] = useState(props.defaultOn ? props.defaultOn : false) // hook with init value

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
const onClicked = () => {
    setOn(true)
    props.onChange(true)
}
const offClicked = () => {
    setOn(false)
    props.onChange(false)
}


    return <div>
        <div style={OnStyle} onClick={onClicked}>On</div>
        <div style={OffStyle} onClick={offClicked}>Off</div>
        <div style={IndicatorStyle}></div>
    </div>
}