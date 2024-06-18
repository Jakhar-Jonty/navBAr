import React from 'react'
import './Nav-bar.css'

export const Nav_bar = () => {
  return (
    <div className='mainContainer'>
        <div className='logoContainer center'>
            <h3>Logo</h3>
        </div>
        <div className='listContainer center'>
            <div className='listItem'>
                <a href='#'>Home</a>
            </div>
            <div className='listItem'>
                <a href='#'>Courses</a>
            </div>
            <div className='listItem'>
                <a href='#'>Charts</a>
            </div>
            <div className='listItem'>
                <a href='#'>About</a>
            </div>
            <div className='listItem '>
                <a href='#'>Contact Us</a>
            </div>
        </div>
        <div className='btnContainer center'>
            <button>LogIn</button>
            <button>SignUp</button>
        </div>
    </div>
  )
}
