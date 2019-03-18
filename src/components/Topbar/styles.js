import styled from "styled-components";
import Logo from "../../assets/images/pokedex.png";

export const Topbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--topbar-height);
  background-color: var(--topbar-background-color);  
  padding: 0 30px;
`;

export const BrandIcon = styled.div`
  display: inline;
  background-image: url(${Logo});
  background-size: contain;
  height: 45px;
  width: 54px;
  margin-right: 36px;
`;

export const BrandText = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #fff;
`;
