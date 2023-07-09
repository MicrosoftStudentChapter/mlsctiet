import { useState } from 'react';
import i2022 from './2022';
import ExpandableCard from './expandableCard'
import p2019 from './2019';
import p2021 from './2021';
import classes from './page.module.css'


function Page() {
  
  const [active, setActive] = useState(null)
  

  return (

      <div className={classes.primary}>
      <ExpandableCard year="2022" index={0} activity={setActive} actid = {active} img={i2022} ></ExpandableCard>
      <ExpandableCard year="2021" index={1} activity={setActive} actid = {active} img={p2021} ></ExpandableCard>
      <ExpandableCard year="2019" index={2} activity={setActive} actid = {active} img={p2019} ></ExpandableCard>
      </div>
  );
  }
  
  export default Page;
  
