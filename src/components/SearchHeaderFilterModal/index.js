import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Dropdown from "../Dropdown";
import TagList from "../TagList";
import {
  ModalHeader,
  ModalHeaderName,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalButton
} from "./styles";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

class SearchHeaderFilterModal extends Component {

  state = {
    filters: []
  };

  componentDidMount() {
    this.setState({
      filters: [...this.props.filters]
    });
  }

  componentWillReceiveProps({filters, isOpen}) {
    if ((isOpen === true && isOpen !== this.props.isOpen) || this.props.filters !== filters) {
      this.setState({
        filters: [...filters]
      });
    }
  }

  handleAddFilters = (filter) => {
    this.setState(state => ({
      filters: [
        ...state.filters,
        filter.value
      ]
    }));
  };

  handleDeleteFilters = (filter) => {
    this.setState(state => ({
      filters: state.filters.filter(f => f !== filter)
    }));
  };

  render() {
    const {
      filters
    } = this.state;

    const {
      isOpen,
      onClose,
      onChangeFilters,
      filterList
    } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)"
          },
          content: {
            border: 0,
            borderRadius: 4,
            padding: 0,
            margin: "0 auto",
            maxWidth: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            bottom: "none",
            minHeight: 350
          }
        }}>
        <ModalHeader>
          <ModalHeaderName>Type filters</ModalHeaderName>
          <ModalCloseButton onClick={onClose}>
            &times;
          </ModalCloseButton>
        </ModalHeader>

        <ModalContent>
          <Dropdown
            options={
              filterList
                .filter(filter => (filters.findIndex(f => f===filter) === -1))
                .map(filter => ({label: filter, value: filter}))
            }
            placeholder="Select type"
            onChange={this.handleAddFilters}
          />
          <TagList tags={filters} handleDelete={this.handleDeleteFilters}/>
        </ModalContent>
        <ModalFooter>
          <ModalButton
            onClick={() => {
              onChangeFilters(filters);
              onClose();
            }}
          >
            Ok
          </ModalButton>
          <ModalButton
            isString
            onClick={onClose}
          >
            Cancel
          </ModalButton>
        </ModalFooter>
      </ReactModal>
    );
  }
}

SearchHeaderFilterModal.defaultProps = {
  filters: [],
  filterList: [],
  isOpen: false,
  onClose: () => {},
  onChangeFilters: () => {}
};

SearchHeaderFilterModal.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  filterList: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onChangeFilters: PropTypes.func
};

export default SearchHeaderFilterModal;
