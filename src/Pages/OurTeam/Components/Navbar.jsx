import React, { useState, useEffect } from "react";
import styles from "../Style/ourteam.module.css";
import styles1 from "../Style/core&exe.module.css";
import data from "../data.json";
import Card from "./Card";
import NamesOnly from "./NamesOnly";
import NameLink from "./NameLink";

const Navbar = () => {
  const [target, setTarget] = useState("secretaries");
  const [fade, setFade] = useState(false);

  const members = data[target];

  function displayMembers(e) {
    const selectedTarget = e.target.dataset.target;
    setTarget(selectedTarget);
    setFade(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), 300); // Duration of the fade effect
    return () => clearTimeout(timer);
  }, [target]);

  return (
    <>
      <div className={styles.navdes}>
        <ul className={styles.navbar}>
          {["secretaries", "heads", "core", "executives"].map((category) => (
            <li key={category}>
              <p
                onClick={displayMembers}
                onAnimationEnd={() => setFade(false)}
                data-target={category}
                className={target === category ? styles.clicked : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className={`members-list ${fade ? styles.fade : ""}`}>
        {target === "executives" || target === "core" ? (
          <div className={styles1.namelist}>
            {members.map((el) =>
              target === "executives" ? (
                <NamesOnly naam={el.naam} key={el.key} />
              ) : (
                <NameLink naam={el.naam} key={el.key} linkedin_acc={el.linkedin_acc} />
              )
            )}
          </div>
        ) : (
          <div className={styles.wrapper}>
            {members.map((el, index) => {
              if (
                (target === "secretaries" && (index === 0 || index === 3)) ||
                (target === "heads" && (index === 4 || index === 7))
              ) {
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
        )}
      </div>
    </>
  );
};

export default Navbar;


