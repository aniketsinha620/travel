import React from 'react'
import "./Body1.css"

export default function Body1() {
  return (
    <div className='main-body1'>
      <div className="International-card">
        <div className="body1-content">
          <h1>International Holiday Packages</h1>
          <p> Whether it's your first international trip or you have travelled abroad multiple times, planning a holiday to a distant land is always a special feeling. Our international holiday packages are well-made and hold a high reputation among customers who have been travelling with us</p>
        </div>
        <div className="cards1">


          <div className="card1">
            <img src="thailand.jpg" alt="hello" />
            <div className='card-details1'>
              <span className='place1'>Thailand</span>
              <span className='price1'>₹60,000</span>
            </div>
            <div className="btn1">
              <button>Details</button>
            </div>
          </div>

          <div className="card1">
            <img src="dubai.jpg" alt="hello" />
            <div className='card-details1'>
              <span className='place1'>Dubai</span>
              <span className='price1'>₹50,000</span>
            </div>
            <div className="btn1">
              <button>Details</button>
            </div>
          </div>
          <div className="card1">
            <img src="vitenam.jpg" alt="hello" />
            <div className='card-details1'>
              <span className='place1'>Vitenam</span>
              <span className='price1'>₹40,000</span>
            </div>
            <div className="btn1">
              <button>Details</button>
            </div>
          </div>



        </div>
        <a href="/" className='more'>Show more..</a>
      </div>


      {/* <div className="main-search">
        <div className="btn-search">
          <input type="text" className='destination' placeholder='Enter your Destination/..' />
          <input type="text" className="location" placeholder='Budget per person/..' />
          <input type="text" className="location1" placeholder='Month of travel/..' />
        </div>
        <button>search</button>
      </div> */}

    </div>
  )
}
