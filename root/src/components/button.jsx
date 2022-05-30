import React from "react";
import classNames from "classnames";
import s from "../styles/button.module.scss";

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  iconClass,
  className,
  contentClass,
}) => {
  return (
    <button className={classNames([s.button, className])}>
      <div className={classNames(s.icon, s.icon__left, iconClass)}>
        {leftIcon}
      </div>
      {children && (
        <div className={classNames(s.button__content, contentClass)}>
          {children}
        </div>
      )}
      {rightIcon && (
        <div className={classNames(s.icon, s.icon__right, iconClass)}>
          {rightIcon}
        </div>
      )}
    </button>
  );
};
