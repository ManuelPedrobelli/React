import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveHeader from './responsiveHeader'
import ResponsiveNav from './responsiveNav'
import About from './about'
import './index.css';

//un componente es una funcion que lo que hace es crear un elemento
//los elementos deben ser PascalCase (no camelCase)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
    <>
    <ResponsiveNav />
    <ResponsiveHeader name="Manuel Pedrobelli" text="Full-Stack developer who finds joy in building web apps." />
    <About />
    </>
)

