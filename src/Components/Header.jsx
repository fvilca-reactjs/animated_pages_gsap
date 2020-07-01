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
            <Link to='/over' exact className='Nav-item' name='OverEffects' onClick={(e) => handleNavigatioState(e)}>Over Effects</Link>
            <Link to='/contact' exact className='Nav-item' name='Contact' onClick={(e) => handleNavigatioState(e)}>Contact</Link>
            <Link to='/sprites' exact className='Nav-item' name='Sprites' onClick={(e) => handleNavigatioState(e)}>Sprites</Link>
            <Link to='/texts' exact className='Nav-item' name='Texts' onClick={(e) => handleNavigatioState(e)}>Texts</Link>
            <Link to='/spinners' exact className='Nav-item' name='Spinners' onClick={(e) => handleNavigatioState(e)}>Spinners</Link>
        </nav>
    )
}

export default Header
