import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import '../header.scss'

function Header({ handleNavigatioState }) {
    return (
        <nav className='PrimaryNav with-indicator'>
            <Link
                to={{ pathname: '/', myCustomProps: 'algo' }}
                exact className='Nav-item is-active' name='Home' onClick={(e) => handleNavigatioState(e)}>Home</Link>
            <Link to='/about' exact className='Nav-item' name='About' onClick={(e) => handleNavigatioState(e)}>About</Link>
            <Link to='/contact' exact className='Nav-item' name='Contact' onClick={(e) => handleNavigatioState(e)}>Contact</Link>
        </nav>
    )
}

export default Header
