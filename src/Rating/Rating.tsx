import React from 'react';
type RatingPropsType ={
     value : 1 | 2 | 3 | 4 | 5

}

type StarPropsType ={
    star:boolean
}

export function Rating (props:RatingPropsType) {
    if (props.value === 1){}
        return <div>
            <Star star={props.value > 0}/>
            <Star star={props.value > 1}/>
            <Star star={props.value > 2}/>
            <Star star={props.value > 3}/>
            <Star star={props.value > 4}/>

        </div>
}


function Star (props:StarPropsType) {
    if (props.star === true ){
   return     <b>star </b>
    } else
    return <span>start </span>
        }