import React from "react";
import Title from "../../Components/Title";
import '../spinners/spinners.scss'

const Spinners = () => {

    const loader =
        (<div className="wrapper">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        )

    return (
        <div>
            <Title
                title1='Loader &'
                title2='Spinners' />
            <section>
                <p className='page-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
                </p>
                {loader}
            </section>
        </div>
    );
};
export default Spinners;
