import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledInput = styled.input`
  background-color: #d9ce96;
  width: 100%;
  border: 3px solid #a0a603;
  border-radius: 15px;
  padding: 15px 10px;

  &::placeholder {
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 15px;
    color: #a0a603;
  }
`;

export const StyledTextarea = styled.textarea`
  background-color: #d9ce96;
  width: 100%;
  border: 3px solid #a0a603;
  border-radius: 15px;
  padding: 15px 10px;
  height: 150px;

  &::placeholder {
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 15px;
    color: #a0a603;
  }
`;
