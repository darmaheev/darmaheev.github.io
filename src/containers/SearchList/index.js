import React, { Component } from "react";
import SearchList from "../../components/SearchList";

class SearchListContainer extends Component {
  state = {
    pagination: {
      pageSize: 100,
      start: 0,
    },
  };

  render() {
    return (
      <SearchList
        {...this.props}
      />
    );
  }
}

export default SearchListContainer;
