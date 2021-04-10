import {useState} from "react";


type AccordionPropsType ={
    titleValue:string
}
type titleValuePropsType ={
    title:string
}


export  function UnControlAccordion (props:AccordionPropsType) {

let [collapsed, setCollapsed] = useState(false)

/*    if (props.collapsed === true){
        return(
            <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/></div>
        )
    }*/

return <div>
   <AccordionTitle title={props.titleValue}/>

    {collapsed && <AccordionBody/>} <button onClick={() => {setCollapsed (collapsed  ? false:true)}
    }>Switch</button>
 {/*якщо не collapsed то покажи <AccordionBody/>*/}
</div>

}
function AccordionTitle (props:titleValuePropsType) {
    return  <h3>---{props.title}---</h3>
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
