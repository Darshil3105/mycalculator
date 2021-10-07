import classes from './App.module.css';
import Keypad from '../Keypad/Keypad';
import Display from '../Display/Display';
import { useState } from 'react';

function App() {

  const [expression,setExpression] = useState('');
  const opertors = ['/','*','+','-','.'];

  function evaluate(val) {
    if(
        (opertors.includes(val) && (expression === '')) ||
        (opertors.includes(val) && opertors.includes(expression.slice(-1)))
    ){
      return;
    }

    setExpression(expression + val);
    
  };

  function calculate() {
    const value = expression.slice(-1);
    if(expression === "" || opertors.includes(value)){
      return;
    }
    if(expression.charAt(0) === "0"){
      const newExpression = expression.substr(1);
      return setExpression(eval(newExpression).toString());
    }
    return setExpression(eval(expression).toString());
  }

  function clearFunction(){
    return setExpression('');
  }

  function deleteFunction(){
    const value = expression.slice(0,-1);
    return setExpression(value);
  }

  return (
    <div className = {classes.maincontainer}>
      <div className = {classes.heading}>Calculator</div>

      <Display displayExpression = {expression} />

      <Keypad 
        getExpression = {evaluate} 
        calculate = {calculate} 
        clearFunction = {clearFunction}
        deleteFunction = {deleteFunction}
      />

    </div>
  );
}

export default App;