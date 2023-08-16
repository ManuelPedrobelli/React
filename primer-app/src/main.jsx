import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

//un componente es una funcion que lo que hace es crear un elemento
//los elementos deben ser PascalCase (no camelCase)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
    <App />
)

