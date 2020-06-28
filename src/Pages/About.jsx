import React, { useEffect, useRef } from 'react'
import Title from '../Components/Title'
import Home from '../Pages/Home'
import { TweenMax } from 'gsap'

function About() {
    //console.log(props.location.myCustomProps)
    console.clear();
    console.log('prev:', localStorage.getItem('prev'))
    console.log('current:', localStorage.getItem('current'))

    let pageInfo = useRef(null)

    useEffect(() => {
        TweenMax.from(pageInfo, {
            delay: 0.5,
            y: 0,
            opacity: 0,
        })
    }, [])
    let prev;
    prev = localStorage.getItem('prev');
    if (prev === 'Home')
        prev = <Home transition='page-exit' />
    else prev= null;

    return (
        <>
            
            <Title
                title1='Lorem ipsum.'
                title2='Lorem ' />
            <p className='page-info' ref={(el) => pageInfo = el}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
            </p>
        </>
    )
}

export default About
