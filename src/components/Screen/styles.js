import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${props => props.verticalCenter && `
    align-items: center;
  `}

  ${props => props.horizontalCenter && `
    justify-content: center;
  `}
`;
