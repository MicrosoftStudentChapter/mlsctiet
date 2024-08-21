import React from 'react';
import style from './Event.module.css';
import eventsData from './data.json';
import styles from './animation.module.css'

const Event = () => {
  return (
    <>
      {eventsData.map((event, index) => (
        <div key={index} className={styles.ind}>
          {index % 2 === 0 ? (
            <>
              <div className={style.Event_container}>
                <div className={style.sideone}>
                  <div className={style.text}>
                    <div className={style.title}>
                      {event.title}
                    </div>
                    <div className={style.description}>
                      <span className={style.bluetext}> (about) </span>
                      {event.description}
                    </div>
                  </div>
                </div>
                <div className={style.sidetwo}>
                  <div className={style.picborder}/>
                  <div className={style.image} style={{ backgroundImage: `url(${event.image})` }}/>
                </div>
              </div>
            </>
          ) : (
            <>
            <div className={style.Event_container}>
                <div className={style.sidetwo}>
                  <div className={style.picborder}/>
                  <div className={style.image} style={{ backgroundImage: `url(${event.image})` }}/>
                </div>
                <div className={style.sideone}>
                  <div className={style.text}>
                    <div className={style.title}>
                      {event.title}
                    </div>
                    <div className={style.description}>
                      <span className={style.bluetext}> (about) </span>
                      {event.description}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Event;