import s from "../styles/sidebar.module.scss";
import { Button } from "./button";
import { SidebarFilters } from "./sidebar_filters";
import { Add } from "./icons/add";

export const Sidebar = () => {
  return (
    <div>
      <Button className={s.button_add} leftIcon={<Add />}>
        Create new
      </Button>
      <SidebarFilters />
    </div>
  );
};
