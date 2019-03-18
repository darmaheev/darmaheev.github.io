import styled from "styled-components";

export const Flash = styled.div`
  background-color: var(--flash-background-color);
  color: var(--flash-color);
  height: var(--flash-height);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  padding: var(--flash-padding);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${props => props.type === "success" && `
    background-color: var(--flash-background-color-success);
  `}

  ${props => props.type === "info" && `
    background-color: var(--flash-background-color-info);
  `}

  ${props => props.type === "danger" && `
    background-color: var(--flash-background-color-danger);
  `}
`;

export const Message = styled.h1`
  margin: 0;
  font-size: var(--flash-message-font-size);
  font-weight: var(--flash-message-font-weight);
  color: var(--flash-message-color);
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const Control = styled.button.attrs({ type: "button" })`
  background-color: transparent;
  border: 0;
  font-size: var(--flash-close-button-font-size);
  color: #fff;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
