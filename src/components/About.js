import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import profile from '../assets/profile.gif'

const About = (props) => {
    return (
      <div className="section-container" >
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>about</h2>
        <hr />
        <div className="image-container">
          <img className="profile-image" src={profile} alt="loading..." />
        </div>
        <div className="info"><h3>birthplace: &nbsp; </h3> <p>queens, new york</p></div>
        <div className="info"><h3>birthdate: &nbsp; </h3> <p>1 october 1996</p></div>
        <div className="info"><h3>hometown: &nbsp; </h3> <p>harrison, arkansas</p></div>
        <h3>bio:</h3>
        <p>i was born to indian immigrants in '96 in queens, ny. we moved to harrison, ar shortly
          after in '99 (crazy, i know!), where i grew up. my dad's a doctor, my sister eventually became
          a doctor, & my mom's a rad tech/lab technician. so yeah. a family of medical... people :,)
        </p>
        <p>so naturally i started college as a bio pre-med major. then before it was time for mcat's spring 
          semester junior year, and i said, nope. and that summer i switched my major to comp sci. spoiler alert:
          best decision ever.
        </p>
        <hr />
        <h3>interests:</h3>
        <p>but anyway, more important things: i love getting my nails done. so much, i make my own press on nails! 
          my fav nail shape is coffin. stilleto, if i'm feeling dangerous (; i like pastels, and black, gold, and white.
          sometimes i'll throw some fun gems on there for some extra flair~
        </p>
        <p>i also love painting (water colors) & ink drawing. with water colors, i like doing abstract portraits. for ink
          drawings, i like doing very detailed full-bodied people, focusing on their clothing. i particularly love
          fusing eastern (indian) fashion with western styles. </p>
        <p>finally, i'm obsessed with making my surroundings & environment match my personality/aesthetic. i love
          muted colors, limited color palettes, and floral themes. i spend hours changing up my laptop/coding environment
          setup depending on my mood, the season, etc. you'll hear me referring to things as "cute" too often,
          something peers have pointed out as "odd" for a computer scientist/developer. but i mean, when my VS code 
          and terminal themes are all synced up and cute, it makes work feel cozy and more enjoyable (:  </p>
      </div>
    )
  }

  const AboutPage = withTheme(About);
  export default AboutPage;
