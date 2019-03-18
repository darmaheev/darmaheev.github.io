import styled from "styled-components";
import ButtonComponent from "../Button";
import Dropdown from "../Dropdown";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--pagination-background-color);
  border-top: 1px solid var(--pagination-border-color);
  border-bottom: 1px solid var(--pagination-border-color);
  padding: var(--pagination-padding);
  width: var(--pagination-width);
  min-height: var(--pagination-height);
  flex-wrap: wrap;
`;

export const PaginationControl = styled(ButtonComponent).attrs(props => ({
  type: "button",
  small: true,
  primary: props.current || false,
  disabled: props.current || props.disabled || false
}))`
  margin-top: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const PaginationPageSize = styled(Dropdown)`
  margin-left: auto;
  width: 100px;
`;
