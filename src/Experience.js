import React from 'react'
import './Experience.css'
import ReactPic from  './image/react.png'
import csspic from  './image/css.png'
import jspic from  './image/JS.png'

const Experience =()=>{
    return(
             <section id="experience">
                <h1 class="m-60"> My Experience </h1>
                <div class="box">
                    <div>
                        <div class="left w-150">
                         <img src={ReactPic} class="w-100 h-100"/>
                    </div>
                   <div class="right w-500 pl-25">
                     <h1>ReactJs</h1>
                     <p>Developed and deployed ReactJs Applications.</p>
                   </div>
                </div>
                     <p></p>
            <div>
                <div class="left w-150">
                    <img src={jspic} class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25">
                    <h1>Javascript</h1>
                    <p>Worked on Javascript Applications</p>
                </div>
            </div>
                     <p></p>
            <div>
                <div class="left w-150">
                    <img src={csspic} class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25">
                    <h1>HTML & CSS3</h1>
                    <p>Developed ChillarKart by using these technologies.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Experience