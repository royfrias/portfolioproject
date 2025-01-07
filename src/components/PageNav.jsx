import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { LuMenu } from "react-icons/lu";
import HamburgerComponent from "./Hamburger";

function PageNav() {
  const [open, setOpen] = useState(false);

  // Load the open state from localStorage on initial render
  useEffect(() => {
    const storedOpen = localStorage.getItem("hamburgerMenuState");
    if (storedOpen) {
      setOpen(JSON.parse(storedOpen));
    }
  }, []);

  // Save the open state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("hamburgerMenuState", JSON.stringify(open));
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <HamburgerComponent open={open} setOpen={setOpen} />

        <ul className={`${styles.menu} ${open ? styles.showMenu : ""}`}>
          <li>
            <NavLink to="/aboutme" onClick={handleLinkClick}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/hobbies" onClick={handleLinkClick}>
              Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactme" onClick={handleLinkClick}>
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={handleLinkClick}
              className={styles.cta}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNav;
