import React from "react";
import classes from './Button.module.css';

export default function Button(props){

    const {value , onClick } = props;

    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const opertors = ['/','*','-','+','.'];

    function returnFunction(e){
        if(numbers.includes(value) || opertors.includes(value)){
            return onClick.getExpression(e.target.value);
        }
        else if(value === "C"){
            return onClick.clearFunction();
        }
        else if(value === "DEL"){
            return onClick.deleteFunction();
        }
        else{
            return onClick.calculate();
        }
    }

    return(
        <button className = {classes.btn} value = {value} 
            onClick = {returnFunction} >
                {value}
        </button>
    );
}