

type AccordionPropsType ={
    titleValue:string

    onClick:(value:boolean) => void
    value:boolean

}
type AccordionTitlePropsType ={
    title:string
    onClick:(value:boolean) => void
    value:boolean
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
   <AccordionTitle value={props.value} onClick={props.onClick} title={props.titleValue}/>

  {props.value && <AccordionBody/>}
 {/*якщо не collapsed то покажи <AccordionBody/>*/}
</div>

}
function AccordionTitle (props:AccordionTitlePropsType) {
    return  <h3 onClick={() => {props.onClick(!props.value)}}>---{props.title}---</h3>
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
