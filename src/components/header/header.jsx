import React from 'react'
import './header.css'

const header = () => {
  return (
    <header>
        <div className='container'>
            <div className="logo">
                <a href="#" className='logo-link'>logo</a>
            </div>

            <nav>
                <ul>
                    <li><a href="#" className='nav-link'>Home</a></li>
                    <li><a href="#" className='nav-link'>Services</a></li>
                    <li><a href="#" className='nav-link'>Products</a></li>
                    <li><a href="#" className='nav-link'>About</a></li>
                    <li><a href="#" className='nav-link'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default header