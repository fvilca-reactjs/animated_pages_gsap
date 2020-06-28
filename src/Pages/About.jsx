import React, { useEffect, useRef } from 'react'
import Title from '../Components/Title'
import Home from '../Pages/Home'
import { TweenMax } from 'gsap'

function About() {
    //console.log(props.location.myCustomProps)
    console.clear();
    console.log('prev:', localStorage.getItem('prev'))
    console.log('current:', localStorage.getItem('current'))
    let prev;
    prev = localStorage.getItem('prev');
    if (prev === 'Home')
        prev = <Home transition='page-exit' />
    else prev = null;

    return (
        <div>
            <Title
                title1='About .'
                title2='Us ' />
            <p className='page-info'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur quo eligendi facere! Mollitia, amet, voluptatibus veniam perspiciatis quae illum sint qui officia aliquam fuga delectus cupiditate temporibus iure ratione earum quasi veritatis dolorem molestias beatae harum! Obcaecati qui nihil accusamus at! Dolorum quos sequi inventore rerum corporis necessitatibus consequatur? Labore vitae suscipit illo? Mollitia fuga dicta incidunt aperiam velit sit natus provident perferendis cupiditate, blanditiis vel. Praesentium facilis quibusdam eligendi architecto unde. Ea, reiciendis earum sunt nulla laborum repellat accusamus temporibus, et consectetur voluptatibus dicta voluptatum! Sit, officia et. Dolore quaerat cumque soluta magni sapiente tenetur commodi repudiandae aut.
            </p>
        </div>
    )
}

export default About
