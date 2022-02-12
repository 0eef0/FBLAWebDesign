import React from 'react'
import logo from '../Images/logo.png';

const Home = () => {
    return (
        <div id='homePage'>
            <div id="left">
                <img src={logo} alt='Logo' />
            </div>
            <div id="right">
                <div className="right-box">
                    <h1>Why we started WD</h1>
                    <br />
                    <p>
                        We started this company because we all had one thing in common: we love to code. We all met in the West-MEC Northeast Coding Program and learned how to code there. Specifically, we learned how to develop websites. Since then, we've decided to hone our skills through WD.
                    </p>
                </div>
                <div className="right-box">
                    <h1>What does 'WD' mean?</h1>
                    <br />
                    <p>
                        WD has two separate meanings. One is 'Web Development', so that we can get straight to the point with our business. The other one is 'West Development', so that we can represent where we learned our skills. Though, 'Development' is a constant because of our passion for the industry.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home
