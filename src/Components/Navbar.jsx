import React from 'react'
import logo from '../img/logo.png'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo-info'>
                <img src={logo} alt="" style={{ width: '40px', margin: '1rem' }} />
                <h1 className='logo-name'>Jordan <br></br> Puterson</h1>
            </div>
            <div className="info">
                <ul className='info-container'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">How to Buy</a></li>
                    <li><a href="#">Memes</a></li>
                </ul>
                <button className='btn'>Buy $Puterson</button>
            </div>
        </nav>
    )
}

export default Navbar