import React, { useState } from "react";
import styles from "./../Style/ourteam.module.css";
import styles1 from "./../Style/core&exe.module.css";
import data from "../data.json";
import Card from "./Card";
import NamesOnly from "./NamesOnly";

const Navbar = () => {
  const [members, setMembers] = useState(data["secretaries"]);
  const [target, setTarget] = useState(data["secretaries"]);
  const [fade, setFade] = useState(false);

  function displayMembers(e) {
    const selectedTarget = e.target.dataset.target;
    setMembers(data[selectedTarget]);
    setFade(true);
    setTarget(selectedTarget);
  }

  return (
    <>
      <div className={styles.navdes}>
        <ul className={styles.navbar}>
          <li className={styles.firstcomp}>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="secretaries"
            >
              Secretaries
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="heads"
            >
              Heads
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="core"
            >
              Core
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="executives"
            >
              Executives
            </p>
          </li>
        </ul>
      </div>
      {fade && (target === "core" || target === "executives") ? (
        <div className="members1">
        <div className={styles1.namelist}>
          {members.map((el) => (
            <NamesOnly naam={el.naam} key={el.key} />
          ))}
        </div>
        </div>
      ) : (
        <div className="members">
          <div className={styles.wrapper}>
            {members.map((el) => (
              <Card
                img={el.img}
                title={el.title}
                linkedin_acc={el.linkedin_acc}
                key={el.key}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
