import React from 'react';
import Ethan from '../Images/Me.PNG';

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
            My name is Ethan Roldan. I am a full-stack web developer. I learned to code at the West-MEC Coding program from 2020-2022. Since then I've been working on a multitude of languages, including HTML, CSS, JS, React, and Node.js just to name a few examples.
          </p>
          <img src={Ethan} alt="Ethan Roldan" />
        </div>
      </div>
      <div className="rightFounders">
        <div className="founder">
          <p>
            My name is Ethan Roldan. I am a full-stack web developer. I learned to code at the West-MEC Coding program from 2020-2022. Since then I've been working on a multitude of languages, including HTML, CSS, JS, React, and Node.js just to name a few examples.
          </p>
          <img src={Ethan} alt="Ethan Roldan" />
        </div>
      </div>
    </div>
  </div>;
};

export default About;
