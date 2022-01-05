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
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="" alt="" />
                    <h3 className="Card-head">Lorem, ipsum.</h3>
                    <p className="Card-Info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae deleniti quia adipisci praesentium corporis!</p>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="" alt="" />
                    <h3 className="Card-head">Lorem, ipsum.</h3>
                    <p className="Card-Info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur itaque dignissimos aperiam! Corporis, possimus!</p>
                </div>
                </a>
                <a className='link-Products' href="">
                    <div className="Card">
                    <img className="Card-Img" src="" alt="" />
                    <h3 className="Card-head">Lorem, ipsum.</h3>
                    <p className="Card-Info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquid. Error placeat nisi esse saepe?</p>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Products
