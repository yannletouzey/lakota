"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

export const Header = () => {

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Lakota</h2>
      <MenuButton />
      <Menu />
    </header>
  );
};