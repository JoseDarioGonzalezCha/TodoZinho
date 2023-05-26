import React from "react";

import calendar from "../../../assets/calendar.png";
import archivetick from "../../../assets/archivetick.png";
import today from "../../../assets/today.png";

import {
  StyledAll,
  StyledCalendar,
  StyledMenuContainer,
  StyledMenuTasks,
  StyledParagraph,
  StyledTitle,
  StyledToday,
} from "./MenuTasks.styles";

export const MenuTasks = () => {
  return (
    <StyledMenuContainer>
      <StyledTitle>TASKS</StyledTitle>

      <StyledMenuTasks>
        <StyledCalendar>
          <img src={calendar} alt="image calendar" />
          <StyledParagraph>CALENDAR</StyledParagraph>
        </StyledCalendar>

        <StyledAll>
          <img src={archivetick} alt="check all" />
          <StyledParagraph>ALL</StyledParagraph>
        </StyledAll>

        <StyledToday>
          <img src={today} alt="image today" />
          <StyledParagraph>TODAY</StyledParagraph>
        </StyledToday>
      </StyledMenuTasks>
    </StyledMenuContainer>
  );
};
