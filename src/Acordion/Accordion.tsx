

type AccordionPropsType ={
    titleValue:string
    collapsed:boolean
}
type titleValuePropsType ={
    title:string
}


export  function Accordion (props:AccordionPropsType) {



/*    if (props.collapsed === true){
        return(
            <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/></div>
        )
    }*/
return <div>
   <AccordionTitle title={props.titleValue}/>

    {!props.collapsed && <AccordionBody/>}
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
