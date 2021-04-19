// import logo from './logo.svg';
import React, {useState} from 'react'
import {connect } from 'react-redux'
import {addMessage, deleteMessage} from '../actionCreators/message'

function List(props) {
  const [input, setInput] = useState('')
  // const [list, setList] = useState([])
  let handleInput=(event)=>{
    setInput(event.target.value)
  }
  let handleClick=()=>{
    console.log({input}) 
    if(!input){
      console.log('empty Input ')
      window.alert('Input something first')
      return
    }
    props.submitNewMessage(input)
    setInput('')
  }
  let handleDelete=(index)=>{
    console.log('clicked')
    console.log('deleting:::', props.messages[index])
    props.deleteMessage(index)
  }
  let reset=()=>{
    console.log('clicked')
    console.log('deleting:::')
    props.reset()
  }
 
  return (
    <div style={{minHeight: '100vh', minWidth: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <h1> Please input to add to list</h1>   
    <input type="text" value={input} onChange={handleInput} />
    <button onClick={handleClick} style={{margin:'1rem'}}>Add</button> 
    <button onClick={reset}>Reset</button>
    <ul style={{height: '200px', overflowY: 'auto',padding: '1% 2%', listStyleType: 'none', border: '1px solid grey'}}>
      {props.messages.map((el,key)=>{
        return <li onClick={()=>{handleDelete(key)}} key={key}>{el}</li>
      })}
    </ul>
    </div>
  );
}

const mapStateToProps= (state)=>{
  return {messages: state}
}
const mapDispatchToProps= (dispatch)=>({  
  submitNewMessage: msg=> dispatch(addMessage(msg)) , 
  deleteMessage: index=> dispatch(deleteMessage(index)),
  reset: () => dispatch({ type: 'RESET' }),  
})
let Container = connect(mapStateToProps, mapDispatchToProps)(List)

export default Container;
