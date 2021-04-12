import React from 'react';

export type RatingValueType = 0 |1 | 2 | 3 | 4 |5
type RatingPropsType ={
     value : RatingValueType
    onClick:(value:RatingValueType)=> void

}

type StarPropsType ={
    star:boolean
    onClick:(value:RatingValueType)=> void
    value: RatingValueType
}

export function Rating (props:RatingPropsType) {
    if (props.value === 1){}
        return <div>
            <Star star={props.value > 0} onClick={props.onClick} value={1}/>
            <Star star={props.value > 1} onClick={props.onClick} value={2}/>
            <Star star={props.value > 2} onClick={props.onClick} value={3}/>
            <Star star={props.value > 3} onClick={props.onClick} value={4}/>
            <Star star={props.value > 4} onClick={props.onClick} value={5}/>

        </div>
}


function Star (props:StarPropsType) {
  return <span onClick={() => {props.onClick(props.value)}}> {props.star ? <b>star</b> : 'star'}</span>
        }