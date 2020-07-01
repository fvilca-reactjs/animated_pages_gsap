import React from "react";
import Title from "../../Components/Title";
import '../texts/texts.scss'

const Texts = () => {
    return (
        <div>
            <Title
                title1='Animated'
                title2='Text' />
            <section>
                <p className='page-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
                </p>
                <div className="shining-text-wrapper">
                    <p className='text'>Texto brillante animado </p>
                </div>
            </section>

        </div>
    );
};
export default Texts;
