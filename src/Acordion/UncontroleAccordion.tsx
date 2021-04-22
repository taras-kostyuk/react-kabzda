import {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


type AccordionPropsType ={
    titleValue:string
}
type titleValuePropsType ={
    title:string
    onClick:() => void
}

export  function UnControlAccordion (props:AccordionPropsType) {



    let [collapsed, dispatch] = useReducer(reducer ,false)


    return <div>
      {/*  <AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
        <AccordionTitle onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}} title={props.titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>


    function AccordionTitle(props: titleValuePropsType) {
        return <h3 onClick={props.onClick}>---{props.title}---</h3>
    }

    function AccordionBody() {
        return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    }
}