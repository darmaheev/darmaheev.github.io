import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";

class SidebarContainer extends Component {
  state = {
    showSidebar: false,
  };

  handleShowSidebar = () => {
    this.setState(state => ({
      showSidebar: !state.showSidebar
    }));
  };

  render() {
    return (
      <Sidebar
        {...this.props}
        {...this.state}
        handleShowSidebar={this.handleShowSidebar}
      />
    );
  }
}

export default SidebarContainer;
