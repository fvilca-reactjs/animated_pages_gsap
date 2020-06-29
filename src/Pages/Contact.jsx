import React from 'react'
import Title from '../Components/Title'


function Contact() {
    
    console.clear();
    console.log('prev:',localStorage.getItem('prev'))
    console.log('current:',localStorage.getItem('current'))
    //es importANTE Q ESTE EN UN DIV EN LUGAR Q UN FRAGMENT
    return (
        <div>
            <Title
                title1='Contact.'
                title2='Us' />
            <p className='page-info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
            </p>
        </div>
    )
}

export default Contact
