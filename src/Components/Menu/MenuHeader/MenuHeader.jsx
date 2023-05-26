import React from "react";

import abacateLendo from "../../../assets/abacateLendo.png";
import icon_vector from "../../../assets/icon_vector.png";
import search_icon from "../../../assets/search_icon.png";

import {
  StyledContent,
  StyledImg,
  StyledInput,
  StyledMenu,
  StyledMenuHeader,
  StyledTitle,
} from "./MenuHeader.styles";

export const MenuHeader = () => {
  return (
    <StyledContent>
      <StyledMenuHeader>
        <StyledTitle>Menu</StyledTitle>
        <img src={icon_vector} alt="icon vector" />
      </StyledMenuHeader>

      <StyledImg src={abacateLendo} alt="avocado reading" />

      <StyledMenu>
        <img src={search_icon} alt="icon search" />
        <StyledInput type="text" placeholder="SEARCH" />
      </StyledMenu>
    </StyledContent>
  );
};
