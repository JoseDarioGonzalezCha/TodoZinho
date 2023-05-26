import React from "react";

import personal from "../../../assets/personal.png";
import school from "../../../assets/school.png";
import market from "../../../assets/market.png";
import archiveadd from "../../../assets/archiveadd.png";

import {
  StyledListContainer,
  StyledListTasks,
  StyledListTitle,
  StyledMarket,
  StyledNewList,
  StyledParagraph,
  StyledPersonal,
  StyledSchool,
} from "./MenuList.styles";

export const MenuList = () => {
  return (
    <StyledListContainer>
      <StyledListTitle>LIST</StyledListTitle>
      <StyledListTasks>
        <StyledPersonal>
          <img src={personal} alt="personal icon" />
          <StyledParagraph>PERSONAL</StyledParagraph>
        </StyledPersonal>

        <StyledSchool>
          <img src={school} alt="school icon" />
          <StyledParagraph>SCHOOL</StyledParagraph>
        </StyledSchool>

        <StyledMarket>
          <img src={market} alt="market icon" />
          <StyledParagraph>MARKET</StyledParagraph>
        </StyledMarket>

        <StyledNewList>
          <img src={archiveadd} alt="new task icon" />
          <StyledParagraph>ADD NEW LIST</StyledParagraph>
        </StyledNewList>
      </StyledListTasks>
    </StyledListContainer>
  );
};
