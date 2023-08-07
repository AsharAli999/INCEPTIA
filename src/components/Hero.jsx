import React from 'react'
import '../components/Hero.css'
import bg from '../bg.png'

const Hero = () => {
  return (
    <div>
        <div class="wrapper">

<div class="background-container">
    <div class="bg-1"></div>
    <div class="bg-2"></div>

</div>
<div class="about-container">
    


<div class="text-container">
        <h1 class="animate-bounce duration-1s delay-0s">Inceptia</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro rerum cupiditate expedita <br/> distinctio nisi nulla ipsum libero molestiae minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,ipsum libero molestiae</p>
        <a href="">Read More</a>
    </div>



    <div class="image-container">
        <img src={bg} alt=""/>
        
    </div>

   
    
</div>
</div>

    </div>
  )
}

export default Hero