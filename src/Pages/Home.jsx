import React from "react";

import Title from "../Components/Title";

const Home = () => {
  return (
    <div>
      <Title
        title1='I am.'
        title2='Fil Vilca ' />
      <p className='page-info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio perspiciatis ipsum tempora reiciendis. Sequi non eligendi reprehenderit ullam, voluptatibus id recusandae eveniet corporis harum omnis similique animi minus debitis doloribus ipsam blanditiis quae placeat at quam numquam. Blanditiis aliquam deleniti quo! Magnam impedit dolore illum nemo architecto soluta officia.
      </p>
    </div>
  );
};

export default Home;
/*import React from 'react'
import Title from '../Components/Title'

function Home() {
    console.clear();
    console.log('prev:', localStorage.getItem('prev'))
    console.log('current:', localStorage.getItem('current'))
    //console.log(props.location.myCustomProps)

    return (
        <div>
            <Title title1='Hello, I am Fil' title2='Front-End Designer & Coder' />
            <p className="page-info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus <span> AAA</span>  saepe modi rem facere cumque voluptate nobis libero. Non hic eaque molestias earum accusamus voluptate eligendi nobis deserunt optio, et doloremque alias quaerat at error reiciendis animi quis! Officia veritatis facilis exercitationem veniam ratione quis mollitia ab maiores adipisci.
            </p>
        </div>


    )
}

export default Home
*/

