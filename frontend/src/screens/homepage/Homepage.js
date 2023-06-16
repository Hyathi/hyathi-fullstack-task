import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div className="main">
        <div className="box">
          <div className="txt">
            <div className='content'>
              <h1>
                The Pokemon <br />
              </h1>
              <span className='txth1'>Game</span>
              <br/> 
              <p>
                The games of Pokemon is famous all over the world
                <br />
                Show your skills train your Pokemon
              </p>
            </div>
          </div>

          <div className="pics">
            <figure>
            <img src="https://turkau.com/en/wp-content/uploads/2022/07/Pokemon-Wallpaper.png" alt="all" />
            </figure>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage