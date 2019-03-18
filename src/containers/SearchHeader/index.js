import React, {Component} from "react";
import SearchHeader from "../../components/SearchHeader";

class SearchHeaderContainer extends Component {
  state = {
    query: "",
    filters: [],
    isVisibleModal: false
  };

  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value
    });
    this.props.handleQueryChange(e.target.value);
  };

  handleChangeFilters = (filters) => {
    this.setState({
      filters: [...filters],
      isVisibleModal: false
    });
    this.props.handleFiltersChange(filters);
  };

  handleModalClose = () => {
    this.setState({
      isVisibleModal: false
    });
  };

  handleDeleteFilters = (filter) => {
    let filters = this.state.filters.filter(nf => nf !== filter);
    this.setState({
      filters
    });
    this.props.handleFiltersChange(filters);
  };

  handleModalOpen = () => {
    this.setState({
      isVisibleModal: true
    });
  };

  render() {
    return (
      <SearchHeader
        {...this.props}
        {...this.state}
        handleQueryChange={this.handleQueryChange}
        handleModalOpen={this.handleModalOpen}
        handleModalClose={this.handleModalClose}
        handleChangeFilters={this.handleChangeFilters}
        handleDeleteFilters={this.handleDeleteFilters}
      />
    );
  }
}

export default SearchHeaderContainer;
