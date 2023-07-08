import { useState } from 'react';
import i2022 from './2022';
import ExpandableCard from './expandableCard'

function Page() {
  
  const [active, setActive] = useState(null)
  
  
  return (

      <div style={{position:'relative', top:'20vh' , zIndex:'2'}}>
      <ExpandableCard year="2022" index={0} activity={setActive} actid = {active} img={i2022} ></ExpandableCard>
      <ExpandableCard year="2021" index={1} activity={setActive} actid = {active} img={i2022} ></ExpandableCard>
      <ExpandableCard year="2019" index={2} activity={setActive} actid = {active} img={i2022} ></ExpandableCard>
      </div>
  );
  }
  
  export default Page;
  
