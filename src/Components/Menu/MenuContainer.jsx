import React from "react";

import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuTasks } from "./MenuTasks/MenuTasks";
import { MenuList } from "./MenuList/MenuList";

export const MenuContainer = () => {
  return (
    <>
      <MenuHeader />
      <MenuTasks />
      <MenuList />
    </>
  );
};
