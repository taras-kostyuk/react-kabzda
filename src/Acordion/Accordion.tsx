

type AccordionPropsType ={
    titleValue:string
    collapsed:boolean
    onClick:() => void


}
type AccordionTitlePropsType ={
    title:string
    onClick:() => void

}

export  function Accordion (props:AccordionPropsType) {

return <div>
   <AccordionTitle  onClick={props.onClick} title={props.titleValue}/>

  {props.collapsed && <AccordionBody/>}
 {/*якщо не collapsed то покажи <AccordionBody/>*/}
</div>

}
function AccordionTitle (props:AccordionTitlePropsType) {
    return  <h3 onClick={ (e)=> props.onClick()}>---{props.title}---</h3>
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
