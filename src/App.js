import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions'
import {decrement, add} from './actions'
import {signIn} from './actions'
import Card from "./components/Card";



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const selectedItems = useSelector(state => state.items);
  const dispatch = useDispatch();
  
  return (  
      <div className="app">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(4))}>-</button>
        
        <button onClick={() => dispatch(signIn())}>login</button>
              
        {isLogged ? <h3>wellcome</h3> : <h3>Goodbye</h3>}

        <Card/>
        <h1>the total price is {counter}$</h1>
        <h5>{selectedItems}</h5>
        
      </div>
    
  ); 
}

export default App;
