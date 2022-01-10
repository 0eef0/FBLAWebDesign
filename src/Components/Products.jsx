import React from 'react'
import "../Styles/main.css"

const Products = () => {
    return (
        <div>
            <div className="Pro-top">
                <h1 className="Pro-header">Product Page</h1>
                <p className="Pro-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut quod eum nesciunt suscipit magnam tenetur saepe assumenda, cupiditate praesentium sint aspernatur eius quam nostrum dolore dolorem ex, qui earum?</p>
            </div>
            <div className="Card-Holder">
                <a className='link-Products' href="https://roldanreactminesweeper.netlify.app/">
                    <div className="Card">
                    <img className="Card-Img" src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/8f3b33a3ca5bc41d0e86a72f274306d8/large.png" alt="" />
                    <h3 className="Card-head">Minesweeper</h3>
                    <p className="Card-Info">This website was made by Ethan Ryan Roldan: This is a recreation of the Old Popular Game called Minesweeper, Enjoy!</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM=" alt="" />
                    <h3 className="Card-head">Website Two</h3>
                    <p className="Card-Info">This website was made by Ethan Ryan Roldan</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM=" alt="" />
                    <h3 className="Card-head">Website Three</h3>
                    <p className="Card-Info">This website was made by Lily Zalit</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM=" alt="" />
                    <h3 className="Card-head">Website Four</h3>
                    <p className="Card-Info">This website was made by Lily Zalit</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM=" alt="" />
                    <h3 className="Card-head">Website Five</h3>
                    <p className="Card-Info">This website was made by Andrew Makris</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="https://tender-beaver-d56329.netlify.app/">
                    <div className="Card">
                    <img className="Card-Img" src="https://pbs.twimg.com/media/E6iDAlaWYAEF6ZP.jpg" alt="" />
                    <h3 className="Card-head">NBA</h3>
                    <p className="Card-Info">This website was made by Andrew Makris: This page is about the NBA and shows the NBA games scores, and NBA teams records. unfortunately The api that had been accessed is no longer available so its currently not up right now</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Products
