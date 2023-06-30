import React from "react";

import Icon from "../../../assets/Vector.png";
import { P, StyledCheck, StyledDiv, StyledTask } from "./TaskShow.styles";

export const TaskShow = () => {
  return (
    <StyledDiv>
      <StyledTask>
        <StyledCheck type="checkbox" />
        <P>TOMATO</P>
      </StyledTask>
      <img src={Icon} alt="Vector" />
    </StyledDiv>
  );
};
