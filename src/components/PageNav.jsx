import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { LuMenu } from "react-icons/lu";
import HamburgerComponent from "./Hamburger";

function PageNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <HamburgerComponent open={open} setOpen={setOpen} />

        <ul className={`${styles.menu} ${open ? styles.showMenu : ""}`}>
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/hobbies">Hobbies</NavLink>
          </li>
          <li>
            <NavLink to="/contactme">Contact Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={styles.cta}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNav;
