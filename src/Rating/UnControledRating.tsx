import React, {useDebugValue, useState} from 'react';
import {RatingValueType} from "./Rating";
type PropsType = {
    defaultValue?: RatingValueType
    onChange:(value:RatingValueType)=>void
}

type StarPropsType ={
    star:boolean
    setValue: () => void
    defaultValue?: 0 |1 | 2 | 3 | 4 |5
}

export function UnControlRating (props:PropsType) {
  let [value,setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)


        return <div>
            <Star star={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star star={value > 1} setValue={() => {setValue(2);props.onChange(2)}}/>
            <Star star={value > 2} setValue={() => {setValue(3);props.onChange(3)}}/>
            <Star star={value > 3} setValue={() => {setValue(4);props.onChange(4)}}/>
            <Star star={value > 4} setValue={() => {setValue(5);props.onChange(5)}}/>

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