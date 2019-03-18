import styled from "styled-components";

export const Input = styled.input.attrs({ type: "text" })`
  height: var(--input-height);
  border-radius: var(--input-border-radius);
  border: 1px solid var(--input-border-color);
  padding: var(--input-padding);
  background-color: var(--input-background-color);
  color: var(--input-color);
  font-size: var(--input-font-size);
  width: var(--input-width);
  &:disabled {
    background-color: var(--button-border-color);
    opacity: 0.8;
    pointer-events: none;
  }

  ${props => props.small && `
    height: var(--input-height-small);
  `}
`;