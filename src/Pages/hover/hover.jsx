import React,{useEffect} from 'react'
import Title from '../../Components/Title'
import './explosion.scss'
import mojs from '@mojs/core'

function OverEffects() {

    console.clear();
    console.log('prev:', localStorage.getItem('prev'))
    console.log('current:', localStorage.getItem('current'))
    useEffect(() => {
        new mojs.Shape(
            
        )
        return () => {
            cleanup
        }
    }, [input])
    //es importANTE Q ESTE EN UN DIV EN LUGAR Q UN FRAGMENT
    return (
        <div>
            <Title
                title1='Explosion'
                title2='...' />
            <p className='page-info'>
                Pure CSS BigBang Explosion Hover Effects - This Video is for Entertainment Purposes Only
            </p>
            <div className='dot'></div>
            <div id="test"></div>
        </div>
    )
}

export default OverEffects