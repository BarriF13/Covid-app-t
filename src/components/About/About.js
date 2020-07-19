
import React, { Component } from 'react'
import style from './about.module.css'


const About = () => {
  return (
    <div className = {style.container}>
      <h2> About this project</h2>
      <p> This is a demo site made by React js for educational purposes.<br/><br/> 
       User can see the slide show, recent articles and videos.<br/> 
       User can load more articles and videos on the homepage.<br/> 
       User can navigate the side with side bar nav.
       <br/> 
       User can be registered with an email and can access to dashboard 
       <br/> 
       Registered user can post an article on the news section of the site.
       <br/> 
      </p>
      <h3><i class="fas fa-tasks"></i>  Learning objective</h3>
      <ul>
        <li>Working with react-dom</li>
        <li>Making routes with react-route</li>
        <li>Creating widgets</li>
        <li>Creating slider and sidebar</li>
        <li>Styling with CSS module and Fontawesome</li>
        <li>Using firebase database system</li>
        <li>and many more react features</li>
        </ul>
        <h2><i class="fab fa-earlybirds fa-2x"><br/> </i> About me</h2>
        <p>I am Barri, Associate Front End Developer, recently graduated from Makers Academy coding bootcamp(London) with a background in Graphic, Web/UI design<br/>Seeking for an Associate Front End Developer role<br/>
        If you like to know more about me please visit my <br/><i class="fab fa-android fa-5x"></i><br/> <a href="https://bdesignstudio.co.uk/">online portfolio</a><br/>
        Many thanks for visiting my demo 
        </p>
    </div>
  )
}

export default About
