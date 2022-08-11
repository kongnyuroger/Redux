import React from 'react'
import {useSelector, useDispatch } from 'react-redux/es/exports'
import { add, decrement, increment } from '../actions'
import './Card.css'

function Card() {
    const dispatch = useDispatch();
  return (
    <>
    <div className='card'>
        <h1>orange price 2$</h1>
        <button onClick={() => dispatch(increment(2))}>add</button>
        <button onClick={() => dispatch(decrement(2))}>remove</button>
        <button onClick={() => dispatch(add('you choose orange'))}>select</button>
    </div>
    <div className='card'>
        <h1>top price 5$</h1>
        <button onClick={() => dispatch(increment(5))}>add</button>
        <button onClick={() => dispatch(decrement(5))}>remove</button>
        <button onClick={() => dispatch(add('you choose top'))}>select</button>
    </div>
    </>
  )
}

export default Card