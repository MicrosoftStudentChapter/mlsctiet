import React, { useState } from "react";
import styles from "./../Style/ourteam.module.css";
import data from "../data.json";
import Card from "./Card";
import NamesOnly from "./NamesOnly";

const Navbar = () => {
  const [members, setMembers] = useState(data["secretaries"]);
  const [target, setTarget] = useState(data['secretaries']);

  const [fade, setFade] = useState(false);

  function displayMembers(e) {
    const selectedTarget = e.target.dataset.target;
    setMembers(data[selectedTarget]);
    setFade(true);
    setTarget(selectedTarget);
  }
  
   // Declare the target variable

  return (
    <>
      <div className={styles.navdes}>
        <ul className={styles.navbar}>
          <li className={styles.firstcomp}>
            <p onClick={displayMembers} onAnimationEnd={() => setFade(false)} data-target="secretaries">
              Secretaries
            </p>
          </li>
          <li>
            <p onClick={displayMembers} onAnimationEnd={() => setFade(false)} data-target="heads">
              Heads
            </p>
          </li>
          <li>
            <p onClick={displayMembers} onAnimationEnd={() => setFade(false)} data-target="core">
              Core
            </p>
          </li>
          <li>
            <p onClick={displayMembers} onAnimationEnd={() => setFade(false)} data-target="executives">
              Executives
            </p>
          </li>
        </ul>
      </div>
      <div className="members">
        {fade && (target === "core" || target === "executives") ? (

<div className={styles.namelist}>
            {members.map((el) => (
              <NamesOnly naam={el.naam} key={el.key} />
            
            ))}
          </div>
        ) : (
          <div className={styles.wrapper}>
            {members.map((el) => (
              <Card img={el.img} title={el.title} linkedin_acc={el.linkedin_acc} />
            
            
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
