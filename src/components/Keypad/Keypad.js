import React from "react";
import Button from "../Button/Button";
import classes from './Keypad.module.css';

export default function Keypad(props){
    return(
        <div className = {classes.keypadContainer}>
            <Button value = "C" onClick = {props} />
            <Button value = "DEL" onClick = {props} />
            <Button value = "/" onClick = {props} />

            <Button value = "*" onClick = {props} />
            <Button value = "-" onClick = {props} />
            <Button value = "+" onClick = {props} />

            <Button value = "7" onClick = {props} />
            <Button value = "8" onClick = {props} />
            <Button value = "9" onClick = {props} />

            <Button value = "4" onClick = {props} />
            <Button value = "5" onClick = {props} />
            <Button value = "6" onClick = {props} />

            <Button value = "1" onClick = {props} />
            <Button value = "2" onClick = {props} />
            <Button value = "3" onClick = {props} />

            <Button value = "0" onClick = {props} />
            <Button value = "." onClick = {props} />            
            <Button value = "=" onClick = {props} />
        </div>
    );
};