import React from 'react'
import "./home.css"

const Home_Page = () => {
  return (
    <div className='home'>
        <div className="container">
            <div className="home_text">
                <h1>Shop With Us</h1>
                <p>orem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div className="home_buttons">
                    <a href="#" className='outline'>Shop Now</a>
                    <a href="#" className='inline'>Club Membership</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home_Page