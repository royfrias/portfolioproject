import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
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
        {/* <li>
          <NavLink to="/workhistory">Work History</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default PageNav;
