import React, {useDebugValue, useState} from 'react';
type RatingPropsType ={


}

type StarPropsType ={
    star:boolean
    setValue: () => void
}

export function UnControlRating (props:RatingPropsType) {
  let [value,setValue] = useState(0)


        return <div>
            <Star star={value > 0} setValue={() => {setValue(1)}}/>
            <Star star={value > 1} setValue={() => {setValue(2)}}/>
            <Star star={value > 2} setValue={() => {setValue(3)}}/>
            <Star star={value > 3} setValue={() => {setValue(4)}}/>
            <Star star={value > 4} setValue={() => {setValue(5)}}/>

        </div>
}


function Star (props:StarPropsType) {
  /*  if (props.star === true ){
   return     <b>star </b>
    } else
    return <span>start </span>*/
  // return  props.star ? <b>star </b> : <span>start </span>
   return   <span onClick={() => {props.setValue()}}> {props.star ? <b>star</b> : "star"} </span>

        }