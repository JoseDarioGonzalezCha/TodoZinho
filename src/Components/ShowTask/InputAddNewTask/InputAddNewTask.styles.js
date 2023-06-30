import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 15px 10px;
  border: 3px solid #a0a603;
  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #f2f2f2;

  &::placeholder {
    font-size: 15px;
    font-weight: bold;
    color: #a0a603;
  }
`;
