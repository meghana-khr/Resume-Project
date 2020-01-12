import React from 'react'
import './Links_Projects.css'
import git from  './image/git.png'
import linked from  './image/linked.png'
const Links_Projects =()=>{
    return(
    <section id="experience">
        <h1 class="m-60"> Links and Projects </h1>
            <div class="box">
                <div>
                     <div class="left w-150">
                     <img src={git} class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25">
                    <h1>Github contributions</h1>
                    <p>@meghana_khr is my username.My open source contributions include a simple apps on ReactJs,Android and PHP.</p>
                </div>
             </div>
        <p></p>
        <div>
            <div class="left w-150">
                <img src={linked} class="w-100 h-100"/>
            </div>
            <div class="right w-500 pl-25">
                <h1>LinkedIn</h1>
                <p>You can also find my complete profile at LinkedIn.</p>
            </div>
        </div>
        <p></p>
       
    </div>
</section>

    )
}
export default Links_Projects