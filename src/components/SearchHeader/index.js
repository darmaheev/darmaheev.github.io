import React from "react";
import PropTypes from "prop-types";
import {FaFilter} from "react-icons/fa";
import TagList from "../TagList";
import SearchHeaderFilterModal from "../SearchHeaderFilterModal";
import {
  Header,
  Input,
  SearchRow,
  FilterToggleButton
} from "./styles";

const SearchHeader = ({
  query,
  filters,
  typeList,
  isVisibleModal,
  handleQueryChange,
  handleChangeFilters,
  handleModalOpen,
  handleModalClose,
  handleDeleteFilters
}) => (
  <Header>
    <SearchRow>
      <Input
        placeholder="Search..."
        name="query"
        value={query}
        onChange={handleQueryChange}
      />
      <FilterToggleButton squared onClick={handleModalOpen}>
        <FaFilter />
      </FilterToggleButton>
    </SearchRow>
    <TagList handleDelete={handleDeleteFilters} tags={filters}/>
    <SearchHeaderFilterModal
      filters={filters}
      filterList={typeList.map(type => type.name)}
      isOpen={isVisibleModal}
      onClose={handleModalClose}
      onChangeFilters={handleChangeFilters}
    />

  </Header>
);

SearchHeader.defaultProps = {
  query: "",
  filters: [],
  typeList: [],
  isVisibleModal: false,
  handleQueryChange: () => {},
  handleChangeFilters: () => {},
  handleModalOpen: () => {},
  handleModalClose: () => {},
  handleDeleteFilters: () => {}
};

SearchHeader.propTypes = {
  query: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
  typeList: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string})),
  isVisibleModal: PropTypes.bool,
  handleQueryChange: PropTypes.func,
  handleChangeFilters: PropTypes.func,
  handleModalOpen: PropTypes.func,
  handleModalClose: PropTypes.func,
  handleDeleteFilters: PropTypes.func
};

export default SearchHeader;
