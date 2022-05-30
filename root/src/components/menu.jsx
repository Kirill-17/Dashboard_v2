import classNames from "classnames";
import { useState } from "react";
import s from "../styles/menu.module.scss";

const menu_items = ["Analyze", "My campaigns", "Configure"];

export const Menu = () => {
  const [active, setActive] = useState(menu_items[0]);

  return (
    <div className={s.menu}>
      <div className={s.menu__container}>
        {menu_items.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={classNames({
              [s.menu__item]: true,
              [s["menu__item--active"]]: active === item,
            })}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
