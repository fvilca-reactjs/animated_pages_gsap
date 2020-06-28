import React,{useRef, useEffect} from 'react'
import {gsap} from 'gsap'

function Title({title1, title2}) {

    let line1 = useRef(null)
    let line2 = useRef(null)
    
    useEffect(() => {
        gsap.from([line1,line2],0.8,{
          delay: 0.2,
          ease: 'power05.out' ,
          y:10,
          opacity:0,
          stagger:{
              amount:0.15,
            }
        })
    }, [])

    return (
        <div className="page-title">
            <div className="line-wrapper">
                <div ref = {el=>(line1=el)} className="line">
                    {title1}
                </div>
            </div>
            <div className="line-wrapper">
                <div ref = {el=>(line2=el)} className="line">
                    {title2}
                </div>
            </div>

        </div>
    )
}

export default Title
