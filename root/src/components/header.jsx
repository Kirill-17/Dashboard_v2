import React from "react";
import s from "../styles/header.module.scss";
import logo from "../assets/logo.svg";
import { Button } from "./button";
import { Info } from "./icons/info";
import { Avatar } from "./avatar";

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} />
      <div className={s.nav}>
        <Button
          className={s.help}
          contentClass={s.help__content}
          rightIcon={<Info />}
        >
          Help
        </Button>
        <Button className={s.upgrade}>Upgrade</Button>
        <Avatar />
      </div>
    </header>
  );
};
