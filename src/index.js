//React code

import React from 'react'
import ReactDOM from 'react-dom'
import Section from './section'
import Experience from './Experience'
import './index.css'
import Links_Projects from './Links_Projects'
import Contact from './contact'
import Hire from './Hire'
const App=()=>{
    return(
       <>    
            <Section />
            <Experience />
            <Links_Projects />
            <Contact />
            <Hire/>
          </> 
    )
}
ReactDOM.render(<App />,document.querySelector('#root'))