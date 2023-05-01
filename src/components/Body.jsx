import React from 'react'
import "./Body.css"

export default function Body() {
    return (
        <div className="india-card">
            <div className="body-content">
                <h1>India & Around Holiday Packages</h1>
                <p>    Travelling abroad for a holiday is a great thing but there isn't anything that beats the diversity of landscapes and cultures in India. We inspire local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src="card5-img.jpg" alt="hello" />
                    <div className='card-details'>
                        <span className='place'>Goa</span>
                        <span className='price'>₹6000</span>
                    </div>
                    <div className="btn">
                        <button>Details</button>
                    </div>
                </div>

                <div className="card">
                    <img src="card2-img.jpg" alt="hello" />
                    <div className='card-details'>
                        <span className='place'>West Bengal</span>
                        <span className='price'>₹3000</span>
                    </div>
                    <div className="btn">
                        <button>Details</button>
                    </div>
                </div>
                <div className="card">
                    <img src="card3-img.jpg" alt="hello" />
                    <div className='card-details'>
                        <span className='place'>Kerala</span>
                        <span className='price'>₹4500</span>
                    </div>
                    <div className="btn">
                        <button>Details</button>
                    </div>
                </div>

            </div>
            <a href="/" className='more'>Show more..</a>
        </div>

    )
}
