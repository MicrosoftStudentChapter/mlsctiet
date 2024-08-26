import React from 'react';
import { gsap } from 'gsap'; 
import $ from 'jquery';
import style from './animation.module.css' 
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import eventsData from './data.json';

import Event from './Event';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);
gsap.config({ autoRefreshEvents: "load, resize", invalidateOnRefresh: true });

const Animation = () => {

  const { ring, ind } = style;
  const n= eventsData.length;
  let ist = 0;
  
  function handleScroll(e) {
    console.log('hi')
    if (ist === 0) {
      ist = 1;
      let deltaY = e.originalEvent ? e.originalEvent.deltaY : e.deltaY;
      if (deltaY === undefined) {
        deltaY = e.wheelDelta ? -e.wheelDelta : e.detail;
      }
      gsap.to(`.${ring}`, {
        duration: 1,
        onComplete: () => { ist = 0; },
        rotationX: '-=' + (deltaY > 0 ? ((348/n) % 360) : (-(348/n) % 360)),
      });
    }
  }
  $(window).on('wheel', handleScroll);

  let yPos = 0;

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);  

function dragStart(e){ 
  if (e.touches) e.clientY = e.touches[0].clientY;
  yPos = Math.round(e.clientY);
  gsap.set(`.${ring}`, {cursor:'grabbing'})
  $(window).on('mousemove touchmove', handleDrag);
}

function handleDrag(e){
  if (e.touches) e.clientY = e.touches[0].clientY;  
  if (ist === 0) {
    ist = 1;
    gsap.to(`.${ring}`, {
      duration: 1,
      onComplete: () => { ist = 0; },
      rotationX: '-=' +( (Math.round(e.clientY)-yPos)>0? (-(348/n) % 360) : ((348/n) % 360)),
    });
    console.log((Math.round(e.clientY)-yPos));
  }
  yPos = Math.round(e.clientY);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', handleDrag);
  gsap.set(`.${ring}`, {cursor:'grab'});
}


function getBgPos(i){
  return '0px ' + ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationX')-180-i*36)/360*500 )+'px';
}

  useGSAP(() => {
    console.log('hello');
    gsap.timeline()
      .set(`.${ring}`, { rotationX: -360 }) 
      .set(`.${ind}`, {
        rotateX: (i) => i * -(360/n), 
        transformOrigin: '50% 50% 800px',
        z: -800, 
        // backgroundImage: (i) => `url(https://picsum.photos/id/${i+32}/600/400/)`,
        backfaceVisibility: 'hidden' 
      })
      .from(`.${ind}`, {
        duration: 1.5,
        y: 200, 
        // transformOrigin: '50% 50% 500px',
        opacity: 0, 
        stagger: 0.2,
        ease: 'expo' 
      });

    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.wind}> 
      <div className={style.stage}>
        <div className={style.container2}>
          <div className={ring}>
              <Event/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;