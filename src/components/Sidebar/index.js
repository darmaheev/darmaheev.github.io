import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Toggle,
  ToggleButton,
  Sidebar,
  Nav,
  NavItem
} from "./styles";

const SidebarComponent = ({
  showSidebar,
  handleShowSidebar,
  ...restProps
}) => (
  <Wrapper hiddenSidebar={!showSidebar}>
    {showSidebar && <Sidebar {...restProps}>
      <Nav>
        <NavItem activeClassName="active" to="/search">
        Search
        </NavItem>
        <a href="https://github.com/darmaheev/darmaheev.github.io">
        About
        </a>
      </Nav>
    </Sidebar>}
    <Toggle>
      <ToggleButton
        hiddenSidebar={!showSidebar}
        onClick={handleShowSidebar}
      />
    </Toggle>
  </Wrapper>
);

SidebarComponent.defaultProps = {
  showSidebar: false,
  handleShowSidebar: () => {}
};

SidebarComponent.propTypes = {
  showSidebar: PropTypes.bool,
  handleShowSidebar: PropTypes.func
};

export default SidebarComponent;
