import React from 'react'
import './section.css'
import Profilepick from  './image/Meghana.jpg'
const Section =()=>{
    return(
        <section id="about">
            <div class="box">
            <div class="profile-summary">
                <div class="discription">
                    <div class="profile-imag">
                        <img src={Profilepick} alt="No Image"  class="profile-pic"/> 
                    </div>
                    <div class="profile-heading">
                        <h1>Meghana</h1>
                        <p>
                           <span class="icon"> <i class="fa fa-envelope-o" aria-hidden="true"> </i> </span>
                            meghanagangolli@gmail.com
                        </p>
                        <p>
                            <span class="icon"> <i class="fa fa-map-marker" aria-hidden="true"> </i> </span>
                             Banagalore
                        </p>
                    </div>
              <div class="profile-description">
                    <h1>About Me</h1>
                    <p>Overthinker,Creator of ChillarKart,Previously i have worked on IOT Projects.Passionate to learn new Technologies.Currently Intern at IDEASPACE.</p>
                      <p>And i am from RNSIT.</p>
            </div>
        </div>
        </div>
    </div>

 </section>
  
  
    )
}
export default Section