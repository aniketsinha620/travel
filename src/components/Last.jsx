import React from 'react'
import "./Last.css"



export default function Last() {
    return (
        <div>
            <div className="footer">
                <div className="offer">
                    <div className='heading'>
                        <h1>Subscribe for Our Offers/Updates</h1>
                        <div className="input">
                            <input type="text" placeholder='Email Address' />
                            <button>Submit</button>
                        </div>

                    </div>
                    <div className="address">
                        <p>123 Maple Street Pleasantville,USA.</p>
                        <p>T:0654-2232-1234
                            M:+!-1234-5555-66
                        </p></div>
                </div>
                <div className="elements">
                    <p className='para'>
                        <a href="/" >Home</a>
                        <a href="/" >About</a>
                        <a href="/" >Contact</a>
                        <a href="/" >Explore</a>
                    </p>

                </div>
                <div className="terms">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and Conditions</a>
                </div>
            </div>

            <i className="icon-buy-forex"></i>
        </div>
    )
}
