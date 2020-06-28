import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function Title({ title1, title2 }) {

    let line1 = useRef(null)
    let line2 = useRef(null)
    //a pesar de q existe onEnter este se impone 
    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: 'power05.out',
            y: 0,
            opacity: 0,
            color:'#090',
            stagger: {
                amount: 0.15,
            }
        })
        
    }, [])

    return (
        <h1 className='page-title'>
            <div className="line-wrap">
                <div ref={el => (line1 = el)} className="line">
                    {title1}
                </div>
            </div>
            <div className="line-wrap">
                <div ref={el => (line2 = el)} className="line">
                    {title2}
                </div>
            </div>
        </h1>
    );
};

export default Title
