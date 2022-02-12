import React from 'react';
import Ethan from '../Images/Me.PNG';
import Andrew from '../Images/Andrew Makris.jpg';
import Lily from '../Images/Lily Zalit.jpg';

const About = () => {
  return <div id='aboutPg'>
    <br />
    <h1 id='aboutTitle'>Meet the Founders!</h1>
    <div id='founders'>
      <div className="leftFounders">
        <div className='founder'>
          <p>
            My name is Ethan Roldan. I am a full-stack web developer. I learned to code at the West-MEC Coding program from 2020-2022. Since then I've been working on a multitude of languages, including HTML, CSS, JS, React, and Node.js just to name a few examples.
          </p>
          <img src={Ethan} alt="Ethan Roldan" />
        </div>
        <div className="founder">
          <p>
            My name is Andrew Makris and I am 18 and currently live in Phoenix Arizona. I just graduated this past year from Sandra Day O'Conner and now I am currently attending Glendale Community College to get my pre-requisites done for as cheap as possible. I am also in the West-Mec Coding program and I have been for the past year. I have enjoyed this class a lot and would like to go into a career path that involves coding
          </p>
          <img src={Andrew} alt="Andrew Makriss" />
        </div>
      </div>
      <div className="rightFounders">
        <div className="founder">
          <p>
            My name is Lily Zalit and I am mainly the designer of the group. I oversee colors, layouts, and the overall designs of all of the projects. I've also been going to West-MEC coding for a while to help me pursue my dream job of a UX Designer.
          </p>
          <img src={Lily} alt="Lily Zalit" />
        </div>
      </div>
    </div>
  </div>;
};

export default About;
