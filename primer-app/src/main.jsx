import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveHeader from './components/responsiveHeader'
import ResponsiveNav from './components/responsiveNav'
import About from './components/about'
import './index.css';
import TechStack from './components/tech-stack'
import SocialIcons from './components/socialIcons'

//un componente es una funcion que lo que hace es crear un elemento
//los elementos deben ser PascalCase (no camelCase)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
    <>
    <ResponsiveNav />
    <SocialIcons />
    <ResponsiveHeader name="Manuel Pedrobelli" text="Full-Stack developer who finds joy in building web apps." />
    <About />
    <TechStack />
    </>
)

