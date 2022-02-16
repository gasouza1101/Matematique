import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import First from './components/basics/First'
import Comp from './components/basics/Components'
const elemento = document.getElementById('root')

ReactDOM.render(
    <div><First></First><Comp></Comp></div>,
    elemento
)