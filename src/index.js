import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import challenges from './challenges'

ReactDOM.render(
  <App
    challenges={ challenges }
  />,
  document.getElementById('root')
)
