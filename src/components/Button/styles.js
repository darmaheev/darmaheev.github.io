import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--button-background-color);
  color: var(--button-color);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  text-transform: var(--button-text-transform);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  line-height: var(--button-line-height);
  letter-spacing: var(--button-letter-spacing);
  vertical-align: var(--button-vertical-align);
  padding: var(--button-padding);
  cursor: pointer;

  &:disabled {
    background-color: var(--button-border-color);
    opacity: 0.8;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--button-background-color-hover);
  }

  ${props => props.primary && `
    background-color: var(--button-background-color-primary);
    color: var(--button-color-primary);
    border: var(--button-border-primary);

    &:disabled {
      background-color: var(--button-border-primary-color);
    }

    &:hover {
      background-color: var(--button-background-color-primary-hover);
      border: var(--button-border-primary-hover);
    }
  `}

  ${props => props.small && `
    font-size: var(--button-small-font-size);
    padding: var(--button-small-padding);
  `}

  ${props => props.squared && `
    padding: var(--button-squared-padding);
  `}

  ${props => props.rounded && `
    border-radius: 500px;
    width: var(--button-rounded-width);
    height: var(--button-rounded-height);
    padding: var(--button-rounded-padding);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
