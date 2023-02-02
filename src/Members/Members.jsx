import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Members.css';

function Members() {
  const handleClick = () => {
    document.querySelector('.hero, .content').classList.add('scrolled');
  }

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');
    const handleMouseWheel = (e) => {
      if (e.deltaY > 0) {
        hero.classList.add('scrolled');
        content.classList.add('scrolled');
        e.preventDefault();
      }
    }

    hero.addEventListener('mousewheel', handleMouseWheel);

    window.addEventListener('mousewheel', (e) => {
      if (hero.classList.contains('scrolled')) {
        if (window.scrollY === 0 && e.deltaY < 0) {
          hero.classList.remove('scrolled');
          content.classList.remove('scrolled');
        }
      }
    });

    return () => {
      hero.removeEventListener('mousewheel', handleMouseWheel);
    };
  }, []);


  return (
    <>
    <Navbar/>
    <div className='Members-container'>
    <div class="hero">
	<div class="hero-inner">
			<div class="hero-title">
				<h1 class="text-light title font-2">Meet Our Team</h1>
			</div>
      <div className="sd" onClick={handleClick}>Click me</div>
	</div>
</div>
       
    
  <div >
    <h1 className='Members-heading'>Organising Team</h1>
   
<div className='Members-body'>
  <div class="cards-container">

    <div class="container" id="alex">
      <div class="inner">
        <div class="text-wrapper">
          <h1> Aksha</h1>
          <span>Curator</span>
        </div>
      </div>
    </div>

    <div class="container" id="lara">
      <div class="inner">
        <div class="text-wrapper">
          <h1>Bireswar</h1>
          <span>Curator</span>
        </div>
      </div>
    </div>
    <div class="container" id="jack">
      <div class="inner">
        <div class="text-wrapper">
          <h1>
           Dipesh
          </h1>
          <span> Curator</span>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>

  
    <div >
<div className='Members-body'>
  <div class="cards-container">

    <div class="container" id="alex">
      <div class="inner">
        <div class="text-wrapper">
          <h1> Alex</h1>
        </div>
      </div>
    </div>

    <div class="container" id="lara">
      <div class="inner">
        <div class="text-wrapper">
          <h1>Lara</h1>
        </div>
      </div>
    </div>
    <div class="container" id="jack">
      <div class="inner">
        <div class="text-wrapper">
          <h1>
            Jack
          </h1>
          <span> Curator</span>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    <h1 className='Members-heading'>Tech Team</h1>
    </div>

    </>
  )
}

export default Members


// <div class="hero">
// 	<div class="hero-inner">
// 			<div class="hero-title">
// 				<h1 class="text-light title font-2">time machine</h1>
// 				<p class="text-capitalize text-light">here starts awesomeness</p>
// 			</div>
// 			<a href="#" class="sd">Scroll Down</a>
// 	</div>
// </div>
// <div class="content clearfix">
// 	<div class="container" style="padding-top: 60px">
// 		<div class="row">
// 			<div class="col-md-5">
// 				<h2 class="text-uppercase">rame ipsum</h2>
// 				<p class="font-alt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatibus molestia!</p>
// 			</div>
// 			<div class="col-md-7">
// 				<p style="padding-top: 47px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam earum eos corporis totam vel, eaque sapiente officiis sint culpa inventore blanditiis hic cupiditate illo nam assumenda reprehenderit suscipit dolorum.</p>			
// 			</div>
// 		</div>	
// 	</div>
// 	<div class="container" style="height: 100vh"></div>
// </div>