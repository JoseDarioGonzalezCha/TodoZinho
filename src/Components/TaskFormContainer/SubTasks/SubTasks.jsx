import React from "react";

import Icon from "../../../assets/vector2.png";

import {
  StyledCheck,
  StyledContainer,
  StyledDiv,
  StyledH2,
  StyledInput,
  StyledParagraphe,
} from "./SubTAsks.styles";

export const SubTasks = () => {
  return (
    <StyledContainer>
      <StyledH2>SUBTASK:</StyledH2>
      <StyledDiv>
        <img src={Icon} alt="vector2" />
        <StyledInput type="text" placeholder="ADD NEW SUBTASK" />
      </StyledDiv>
      <StyledDiv>
        <StyledCheck type="checkbox" />
        <StyledParagraphe>SUBTASK</StyledParagraphe>
      </StyledDiv>
    </StyledContainer>
  );
};
