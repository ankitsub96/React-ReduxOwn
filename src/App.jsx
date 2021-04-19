// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {connect } from 'react-redux'
import Container from './list/List'
import {addMessage} from './actionCreators/message.js'

function App() {
  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
