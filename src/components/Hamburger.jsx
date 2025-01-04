import Hamburger from "hamburger-react";
import { useState } from "react";
import styles from "./Hamburger.module.css";

function HamburgerComponent({ open, setOpen }) {
  return (
    <div className={styles.hamburger}>
      <Hamburger size={30} toggled={open} toggle={setOpen} color="#636723" />
    </div>
  );
}

export default HamburgerComponent;
