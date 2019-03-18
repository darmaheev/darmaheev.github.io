import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const iconToggle = require("../../assets/images/toggle-icon.png");

export const Sidebar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column; 
  background-color: var(--sidebar-background-color);
  padding: var(--sidebar-padding);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled((props) => <NavLink {...props} />)`
  color: var(--sidebar-color);
  text-decoration: none;

  &.active {
    color: var(--sidebar-color-active);
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  ${props => props.hiddenSidebar && `
    width: 50px;
  `}
`;

export const Toggle = styled.div`
  background: rgba(0, 43, 67, 0.1);
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 44px 0;
`;

export const ToggleButton = styled.button`
  border: none;
  display: inline;
  padding: 0;
  margin: 0;
  background: url(${iconToggle});
  width: 20px;
  height: 13px;
  ${props =>
    props.hiddenSidebar &&
  `
    transform: rotate(180deg);
  `};
`;
