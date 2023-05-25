import React from "react";

import abacateLendo from "../../../assets/abacateLendo.png";

import { BiGridSmall } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

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
        <BiGridSmall />
      </StyledMenuHeader>

      <StyledImg src={abacateLendo} alt="avocado reading" />

      <StyledMenu>
        <FiSearch />
        <StyledInput type="text" placeholder="SEARCH" />
      </StyledMenu>
    </StyledContent>
  );
};
