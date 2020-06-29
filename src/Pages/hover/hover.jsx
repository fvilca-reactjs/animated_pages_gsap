import React,{useEffect} from 'react'
import Title from '../../Components/Title'
import './explosion.scss'
import mojs from '@mojs/core'

function OverEffects() {

    console.clear();
    console.log('prev:', localStorage.getItem('prev'))
    console.log('current:', localStorage.getItem('current'))
    useEffect(() => {

        setTimeout(()=>{
            const animation = new mojs.Burst({
                parent: '#test',
                shape: 'circle',
                fill: {'#999': '#fc46ad'},
                radius:{20:40},
                duration:4000,
                isYoyo: true,
                isShowStart: true,
                easing:'elastic.inout',
                repeat:1
            })
            animation.play();
        },1000)
       
        
    }, [])
    //es importANTE Q ESTE EN UN DIV EN LUGAR Q UN FRAGMENT
    return (
        <div className='page-container'>
            <Title 
                title1='Explosion'
                title2='...' />
            <p className='page-info'>
                Pure CSS BigBang Explosion Hover Effects - This Video is for Entertainment Purposes Only
            </p>
            <div className='dot'/>
            <div id="test"/>
        </div>
    )
}

export default OverEffects