import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provier } from 'react-redux';
import CounterTest from './components/CounterTest';
import redcer from './reducers'

const store = createStore(redcer);
const rootEl = document.getElementById('root')
const render = ()=>{
  return ReactDOM.render(
  <CounterTest 
  counter={store.getState()}
  deComment={()=>store.dispatch({type:'DECREMENT'})}
  inComment={()=>store.dispatch({type:'INCREMENT'})}
  />,
  rootEl
)}
render()
store.subscribe(render)



