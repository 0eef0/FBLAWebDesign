import {React} from 'react'
import "../Styles/main.css"



const Products = () => {
        return (
        <div>
            <div className="Pro-top">
                <h1 className="Pro-header">Product Page</h1>
                <p className="Pro-info">These are some of our Websites that we have worked on in our Past. Please feel free to enjoy and explore any of the pages shown below. If you have any questions and would like to contact us, please head over to our contact page and contact one of our brilliant web designers.</p>
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
                <a className='link-Products' href="https://amakris12.github.io/Group-bootstrap/">
                    <div className="Card">
                    <img className="Card-Img" src="https://cdn-icons-png.flaticon.com/512/871/871512.png" alt="" />
                    <h3 className="Card-head">Wii Website</h3>
                    <p className="Card-Info">This website was made by Andrew Makris and Ethan Ryan Rolden:This was a group project in a design layout like the Wii. It covers all three of the most popular games Mario, Zelda, and Donkey Kong.</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click to See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="https://princetonjeffries.github.io/pokedex/index.html">
                    <div className="Card">
                    <img className="Card-Img" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" alt="" />
                    <h3 className="Card-head">Pokemon</h3>
                    <p className="Card-Info">This website was made by Andrew Makris: This is a website about three pokemon Charzard,Charmeleon, and Charmander. It gives you all of there statistics and abilites.</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
                <a className='link-Products' href="https://tender-beaver-d56329.netlify.app/">
                    <div className="Card">
                    <img className="Card-Img" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/NBA_75th_anniversary_logo.svg/1200px-NBA_75th_anniversary_logo.svg.png" alt="" />
                    <h3 className="Card-head">NBA</h3>
                    <p className="Card-Info">This website was made by Andrew Makris: This page shows the NBA games scores, and NBA teams records. This was made for fans to check up on their favorite teams.</p>
                    <button className="Card-Btn"><h4 className="Card-Btn-Text">Click To See</h4></button>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Products
