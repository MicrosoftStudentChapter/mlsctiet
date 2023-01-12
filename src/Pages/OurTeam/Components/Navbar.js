import React, { useState } from "react";
import styles from "./../Style/ourteam.module.css";
import data from "../data.json";
import Card from "./Card";

const Navbar = () => {
  const [members, setMembers] = useState(data["secretaries"]);

  function displayMembers(e) {
    setMembers(data[e.target.dataset.target]);
    // console.log(e.target.dataset.target);
  }

  return (
    <>
      <div className={styles.navdes}>
        <ul className={styles.navbar}>
          <li className={styles.firstcomp}>
            <p onClick={displayMembers} data-target="secretaries">
              Secretaries
            </p>
          </li>
          <li>
            <p onClick={displayMembers} data-target="heads">
              Heads
            </p>
          </li>
          <li>
            <p onClick={displayMembers} data-target="core">
              Core
            </p>
          </li>
          <li>
            <p onClick={displayMembers} data-target="executives">
              Executives
            </p>
          </li>
        </ul>
      </div>
      <div className="members">
        <div className={styles.wrapper}>
          {members.map((el) => {
            // console.log(el.title);
            // console.log(el.img);
            return <Card img={el.img} title={el.title} />
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
