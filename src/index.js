//React code

import React from 'react'
import ReactDOM from 'react-dom'
import Section from './section'
import Experience from './Experience'
import './index.css'
const App=()=>{
    return(
            <>
<Section />
             <Experience />
            </>
    )
}
ReactDOM.render(<App />,document.querySelector('#root'))