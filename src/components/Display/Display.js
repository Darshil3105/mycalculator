import React from "react";
import classes from './Display.module.css';

export default function Display(props){

    return(
        <div className = {classes.calculationContainer}>
            <div className = {classes.displayCalculation}>
                {
                    props.displayExpression || 0
                }
            </div>
        </div>
    );
};