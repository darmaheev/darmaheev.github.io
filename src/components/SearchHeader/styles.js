import styled from "styled-components";
import InputComponent from "../Input";
import ButtonComponent from "../Button";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;  
`;

export const Input = styled(InputComponent).attrs({ type: "text" })``;

export const FilterToggleButton = styled(ButtonComponent).attrs({
  type: "button"
})`
  margin-left: 10px;
`;

export const SubmitButton = styled(ButtonComponent).attrs({ primary: true })`
  margin-left: 10px;
`;
