import React from "react";

import { StyledSection } from "./MenuContainer.styles";

import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuTasks } from "./MenuTasks/MenuTasks";
import { MenuList } from "./MenuList/MenuList";

export const MenuContainer = () => {
  return (
    <StyledSection>
      <MenuHeader />
      <MenuTasks />
      <MenuList />
    </StyledSection>
  );
};
