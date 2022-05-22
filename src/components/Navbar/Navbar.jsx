import React from "react";
import ComboSearch from "./ComboSearch/ComboSearch";
import Breadcrums from "./Breadcrums/Breadcrums";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header} data-cy="navbar">
      <div className={styles.navbar}>
        <img className={styles.logo} src={logo} />
        <ComboSearch />

        <div className={styles.logIn}>Log In</div>
        <div className={styles.signIn}>Sign Up</div>
      </div>
      <Breadcrums />
    </header>
  );
};

export default Navbar;
