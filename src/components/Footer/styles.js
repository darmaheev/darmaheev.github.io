import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: var(--footer-height);
  background-color: var(--footer-background-color);
  border-top-color: var(--footer-border-top-color);
  border-top-width: 1px;
  padding: 0 30px;
`;

export const FooterText = styled.h1`
  margin: 0;
  font-size: var(--footer-font-size);
  color: var(--footer-color);
  font-weight: normal;
`;
