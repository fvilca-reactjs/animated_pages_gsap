import React from 'react'
import './character_walking.scss'
import Title from "../../Components/Title";

const SpriteSheet = () => {
    return (
        <div>
            <Title
                title1='SpriteSheet'
                title2='css' />
            <p className='page-info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
            </p>

            <div className='sprite-sheet-wrapper'>
                
                <div className='shadow'/>
                <img className="sprite-sheet" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="character" />
            </div>

            
        </div>
    );
};

export default SpriteSheet;


