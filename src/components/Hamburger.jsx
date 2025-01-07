import Hamburger from "hamburger-react";
import { useState } from "react";
import styles from "./Hamburger.module.css";

function HamburgerComponent({ open, setOpen }) {
  const handleToggle = () => {
    console.log("Hamburger clicked"); // Log when clicked
    setOpen((prevOpen) => !prevOpen); // Manually toggle the state
  };

  return (
    <div className={styles.hamburger}>
      <Hamburger
        size={30}
        toggled={open} // Uses the current state
        toggle={handleToggle} // Toggle on click
        color="#636723"
      />
    </div>
  );
}

export default HamburgerComponent;
