import React, { useEffect, useState } from 'react'
import styles from '../../styles/event1/event1.module.css'
import Backsvg from './Backsvg';
import EventsCarousel from './Carousel';
import YearSelector from './YearSelector';

function Event1() {

  const [year, setYear] = useState(22);
  const [isMobile, setIsMobile] = useState(false);

  const yearWiseData = {
    22 : {1:["Makeathon 4.0","The Microsoft Learn Student Chapter team was back with its most-awaited, annual flagship event MAKEATHON 4.0. Since its inception three years ago MAKEATHON has unquestionably established as one of the most known hackathons of North India, as well as Thapar Institute of Engineering and Technology turning out to be it’s first MLH sponsored hackathon. With the dedicated effort of the members of the society, a 24-hour hybrid hackathon with more than 1500 registrations and 300 participating teams in online and offline, and bootcamp which included eminent speakers was successfully completed. 50+ sponsors helped us bag prizes in the form of monetary prizes, goodies, swags, premium courses and a lot more."],
          2:["CP contest 2022","CP contest was the first iteration of the monthly intra MLSC CP Contest to nurture the coding and technical culture. The competition offered all the technophiles a competitive environment and let the contestants demonstrate their logical and analytical abilities. The questions were designed to put their knowledge to the test and give them a taste of competitive coding. Three victors emerged as the clear leaders in the competition."], 
          3:["Ideathon 2022","Ideathon was an Intra-MLSC contest. The competition gave participants a chance to present their solutions to pressing problems. The event's goal was to introduce the participants to hackathons and teach them how to succeed in them. It also facilitated the formation of some outstanding teams and peer relationships. The sole criterion was an imaginative mind; prior coding experience wasn't necessary because all they had to do was present their ideas using a business model, ppts, and the tech stack. One winning team emerged from the competition with outstanding pitching and innovation abilities."], 
         },
    21 : {1:["Tech Meet  2021","The Microsoft Learn Student Chapter team organized the Techmeet as an orientation for newcomers; this meet was held at the C-hall with a decent strength of enthusiastic first years. Before the online event, we introduced the Team and the Society. The two-day event addressed various topics, including Web development, competitive programming, ethical hacking, game development, Machine learning, artificial intelligence, and many others. The offline session was successful, with many students engaging in the live Q&A. All the aspiring enthusiasts in the many disciplines mentioned found it to be an interactive and educational session."],
          2:["Makeathon 3077","For the past two years, our flagship event, MAKEATHON, has proven to be an Avant-grade hackathon in North India and unquestionably the most famous hackathon at Thapar Institute of Engineering and Technology. We successfully ran the MAKEATHON 3077 in 2021. The dedicated hard work of every member in an online mode allowed a 36-hour hackathon with more than 1500 registrations and 300 participating teams. We had eminent speakers present, who provided enlightening talks on various topics. We were able to win prizes worth 80 lakhs thanks to our 50+ sponsors, including Devfolio and Prepbytes. Who also offered us freebies, premium courses, and other items."], 
          3:["Quarter Quell","Aiming to cover a variety of topics, including coding, critical thinking, trade, and quest-solving, Quarter Quell was an online competition that prioritised providing participants with an exciting and enjoyable experience. Only the teams that had qualified on Day 1 played against one another in the second round of this breath-taking CTF to determine the overall champion.\nWe had more than 400 competitors, and the top 3 teams were named the major champions. With the support of more than 35 sponsors, including Custkart, PrepBytes, and Coding Ninjas, we were able to obtain gifts, vouchers for premium courses, and swag for each of the winners and competitors."], 
         },
    20 : {1:["ABHYUDAYA 2020","The goal of ABHYUDAYA was to bring together a variety of skill sets under one roof, including coding, critical thinking, trade, gaming, and much more. Participating teams could consist of three to four people. To provide a superb user experience, a real-world simulation was made. To establish a scenario for solving problems in real life and to place a greater emphasis on the application of principles, these teams were divided up among the continents of the world. The teams were then given questions in the form of crisis updates for their particular continents."],
          2:["Makeathon 2.0","Makeathon'20, the year's most anticipated hackathon, was an occasion brimming with innovation and vigor. It featured programs on GraphQL, App development, AI/Machine Learning, Robotics, Block Chain, Cryptography, Algorithms, AR/VR, and open hack, among other mind-blowing topics. Dr. Harpreet Singh, Mr. Saksham Choudhary, and Dr. P.S. Rana judged the competition. Students from the college as well as from other colleges gave a fantastic response. Participants came from a wide range of backgrounds. In addition to several other benefits and accolades, prizes totalling Rs 1 Lac were given away. The Makeathon, which lasted 24 hours, saw thrilling moments among increasing stakes and left us all with captivating memories."], 
          3:["Open-source sessions","At the Microsoft Learn Student Chapter, we have always valued group learning and community support. We hold a number of seminars and AMA sessions throughout the year in our open-source community in keeping with this ideology. These sessions are led by students who are pursuing their particular fields of study, and are open to everyone. We frequently invite well-known instructors and speakers to participate in these courses.\nWe've held workshops on GITHUB, REACT Machine Learning and Deep Learning, Web Development and DevOps, App Development, and Cyber Security throughout the course of the last year. The Ex-Joint Secretary of MLSC, Saurav Shrivastav, who had successfully completed GSoC this year, also led a session on the Know-Hows of GSoC."], 
         }
  }

  useEffect(()=>{
    if(window.innerWidth <= 768){
      setIsMobile(true)
    }
  },[])

  const [data, setData] = useState(yearWiseData[year]);
  const [remSub, setRemSub] = useState(false);

  const toggle = () => {
    setRemSub(!remSub);
  }

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.back}>
            {!remSub?(<Backsvg rem={false} mob={isMobile}/>):(<Backsvg rem={true} mob={isMobile}/>)}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          {
            <YearSelector chngYear={setYear} chngData={setData} yearData={yearWiseData} />
          }
        </div>
        <div className={styles.mid}>
          <div className={styles.carousel}>
            <EventsCarousel yearData={data} toggle={toggle} />
          </div>
        </div>
        {!remSub && (<div className={styles.footer}>
          <div className={styles.text}>
            <div className={styles.heading}>
              EVENTS
            </div>
            <div className={styles.subhead}>
              @ MLSC
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Event1;
