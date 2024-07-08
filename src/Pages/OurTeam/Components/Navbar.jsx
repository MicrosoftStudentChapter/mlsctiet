import React, { useState } from "react";
import styles from "../Style/ourteam.module.css";
import styles1 from "../Style/core&exe.module.css";
import data from "../data.json";
import Card from "./Card";
import NamesOnly from "./NamesOnly";
import NameLink from "./NameLink";

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
              className={target === "secretaries" ? styles.clicked : ""}
            >
              Secretaries
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="heads"
              className={target === "heads" ? styles.clicked : ""}
            >
              Heads
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="core"
              className={target === "core" ? styles.clicked : ""}
            >
              Core
            </p>
          </li>
          <li>
            <p
              onClick={displayMembers}
              onAnimationEnd={() => setFade(false)}
              data-target="executives"
              className={target === "executives" ? styles.clicked : ""}
            >
              Executives
            </p>
          </li>
        </ul>
      </div>
       {fade && (target === "executives") && (
        <div className="members-names">
          <div className={styles1.namelist}>
            {members.map((el) => (
              <NamesOnly naam={el.naam} key={el.key} />
            ))}
          </div>
        </div>
      )}
      {fade && (target === "core") && (
        <div className="members-names">
          <div className={styles1.namelist}>
            {members.map((el) => (
              <NameLink naam={el.naam} key={el.key} linkedin_acc={el.linkedin_acc}/>
            ))}
          </div>
        </div>
      )}
      {(!fade || (target == "secretaries")) && (
        <div className="members-list">
        <div className={styles.wrapper}>
          {members.map((el, index) => {
            if (index === 0 || index === 3) {
              return <div className={styles.emptyCard} key={`empty-${index}`} />;
            }
            return (
              <Card
                img={el.img}
                title={el.title}
                linkedin_acc={el.linkedin_acc}
                key={el.title}
              />
            );
          })}
        </div>
      </div>
    )}
     {(!fade || (target == "heads")) && (
        <div className="members-list">
          <div className={styles.wrapper}>
          {members.map((el, index) => {
            if (index === 4 || index === 7) {
              return <div className={styles.emptyCard} key={`empty-${index}`} />;
            }
            return (
              <Card
                img={el.img}
                title={el.title}
                linkedin_acc={el.linkedin_acc}
                key={el.title}
              />
            );
          })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


