
type  ItemType ={
    title:string
    value:any
}
export type AccordionPropsType ={
    titleValue:string
    collapsed:boolean
    onChange:() => void
    color?:string
    items:ItemType[]
    onClick: (value:any) => void

}
type AccordionTitlePropsType ={
    title:string
    onChange:() => void
    color?:string

}

export  function Accordion (props:AccordionPropsType) {

return <div>
   <AccordionTitle color={props.color} onChange={props.onChange} title={props.titleValue}/>

  {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
 {/*якщо не collapsed то покажи <AccordionBody/>*/}
</div>

}
function AccordionTitle (props:AccordionTitlePropsType) {
    return  <h3
        style={{color: props.color ? props.color : "black"}}
        onClick={ (e)=> props.onChange()}>---{props.title}---</h3>
}
export type AccordionBodyPropsType ={
    onClick: (value:any) => void
    items:ItemType[]

}
function AccordionBody(props:AccordionBodyPropsType) {
    return <div>
        <ul>
            { props.items.map( (i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </div>
}
