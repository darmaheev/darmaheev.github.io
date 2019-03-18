import styled from "styled-components";

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: var(--modal-header-background-color);
  border-bottom: 1px solid var(--modal-border-color);
  padding: 20px;
`;

export const ModalHeaderName = styled.h4`
  margin: 0;
  color: var(--modal-header-color);
`;

export const ModalCloseButton = styled.button.attrs({ type: "button" })`
  border: 0;
  background-color: transparent;
  color: var(--modal-header-color);
  margin-left: auto;
  font-size: 32px;
  padding: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  flex: 1;  
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #ebedef;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: row;
`;

export const ModalButton = styled.button`
  display: inline-block;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  height: 40px;
  border: 0px none;
  padding: 8px 33px;
  border-radius: 4px;

  &,
  &:hover,
  &:focus {
    color: #fff;
  }

  &:focus,
  &:active {
    outline: none;
  }

  background: var(--button-background-color-primary);

  &:hover {
    background: var(--button-background-color-primary-hover);
  }

  &:active {
    background: var(--button-background-color-primary-hover)
  }

  ${props =>
    props.isString &&
  `
    padding: 8px 25px;
    letter-spacing: normal;
    text-transform: none;
    font-weight: 400;

    & {
      color: var(--button-background-color-primary);
    }

    &:focus,
    &:hover {
      color: var(--button-background-color-primary-hover);
    }

    &,
    &:hover,
    &:focus {
      background: transparent;
    }
  `};
`;
