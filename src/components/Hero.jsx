import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
        <div className="main">

            <video src='videoBg2.mp4' autoPlay loop muted />
            <div className="content">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>

                <div className="btn">
                    <button className='btn-1'>GET STARTED</button>
                    <button className='btn-2'>WATCH TRAILER <i class="fa-sharp fa-solid fa-circle-play"></i></button>
                </div>
            </div>
        </div>
    )
}
//  autoPlay loop muted 