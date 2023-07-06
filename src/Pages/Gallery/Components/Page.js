import { useState } from 'react';
import imgs from './imgurls';
import ExpandableCard from './expandableCard'

function Page() {
  
  const [active, setActive] = useState(null)
  
  
  return (

      <div style={{marginTop:'20vh'}}>
      <ExpandableCard year="2023" index={0} activity={setActive} actid = {active} img={imgs} ></ExpandableCard>
      <ExpandableCard year="2022" index={1} activity={setActive} actid = {active} img={imgs} ></ExpandableCard>
      <ExpandableCard year="2021" index={2} activity={setActive} actid = {active} img={imgs} ></ExpandableCard>
      <ExpandableCard year="2020" index={3} activity={setActive} actid = {active} img={imgs} ></ExpandableCard>
      </div>
  );
  }
  
  export default Page;
  