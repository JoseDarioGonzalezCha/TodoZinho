import styled from "styled-components";

export const StyledContainer = styled.h2`
  margin: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const StyledH2 = styled.h2`
  font-family: "Bebas Neue";
  font-weight: 400px;
  font-size: 40px;
  color: #000000;
`;

export const StyledDiv = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #d9ce96;

  &::placeholder {
    font-family: "Urbanist";
    font-weight: 700px;
    font-size: 15px;
  }
`;

export const StyledCheck = styled.input`
  background-color: #f2f2f2;
  width: 40px;
  border: 3px solid gray;
`;

export const StyledParagraphe = styled.p`
  font-family: "Urbanist";
  font-weight: 700px;
  font-size: 15px;
  color: #515249;
`;
