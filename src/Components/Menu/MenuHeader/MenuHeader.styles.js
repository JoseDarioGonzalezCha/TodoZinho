import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 15px 0 15px;
`;

export const StyledTitle = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400px;
  font-size: 40px;
  text-transform: uppercase;
  color: #2c4001;
`;

export const StyledImg = styled.img`
  width: 60%;
  margin: 0 auto;
`;

export const StyledMenu = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #a0a603;
  border-radius: 10px;
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledInput = styled.input`
  border: none;
  margin-left: 10px;

  &::placeholder {
    color: #a0a603;
    font-size: 15px;
    font-weight: 700;
  }
`;
