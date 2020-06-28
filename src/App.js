//import logo from './logo.svg';
import React from 'react';
import './index.scss';
import { Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Components/Header';

import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact }
];

const handleNavigatioState = (e) => {
  const current = localStorage.getItem('current') 
  if(current !==e.target.name )
      localStorage.setItem('prev', current);
  localStorage.setItem('current', e.target.name);
  console.log('Done')
}


function App() {
  const onEnter = node => {
    console.log(node.children[0].firstElementChild)
    console.log(node.children[0].lastElementChild)
    gsap.from(
      [node.children[0].childNodes[0]],
      0.6,
      {
        y: 40,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
    gsap.from(
      [node.children[0].childNodes[1]],
      0.6,
      {
        y: -30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );

  };

  const onExit = node => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <>
      <Header handleNavigatioState = {handleNavigatioState}/>
      <div className='container'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                onEntering={onEnter}
                onExit={onExit}
                unmountOnExit>
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;


/*
export default function App() {
  localStorage.setItem('current', 'Home');
  localStorage.setItem('prev', null);
  return (
    <>
      <Header handleNavigatioState = {handleNavigatioState}/>
      <div className='container'>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </div>
    </>
  );
}


*/