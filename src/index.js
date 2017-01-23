import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import challenges from './challenges'
import './styles/app.scss'

ReactDOM.render(
  <App
    challenges={ challenges }
  />,
  document.getElementById('root')
)
