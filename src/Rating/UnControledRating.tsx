import React, {useState} from 'react';
type RatingPropsType ={


}

type StarPropsType ={
    star:boolean
}

export function UnControlRating (props:RatingPropsType) {
  let [value,setValue] = useState(0)
        return <div>
            <button onClick={() => {setValue(0)}}>0</button>
            <Star star={value > 0}/><button onClick={() => {setValue(1)}}>1</button>
            <Star star={value > 1}/><button onClick={() => {setValue(2)}}>2</button>
            <Star star={value > 2}/><button onClick={() => {setValue(3)}}>3</button>
            <Star star={value > 3}/><button onClick={() => {setValue(4)}}>4</button>
            <Star star={value > 4}/><button onClick={() => {setValue(5)}}>5</button>

        </div>
}


function Star (props:StarPropsType) {
    if (props.star === true ){
   return     <b>star </b>
    } else
    return <span>start </span>
        }