import React from "react";
import PropTypes from "prop-types";

import TagItem from "../TagItem";
import {
  Wrapper
} from "./styles";

const TagList = ({
  tags,
  handleDelete
}) => {
  return (
    <Wrapper center={typeof handleDelete !== "function"}>
      {tags.map(tag => (<TagItem key={tag} handleDelete={handleDelete}>{tag}</TagItem>))}
    </Wrapper>
  );
};

TagList.defaultProps = {
  tags: [],
  handleDelete: undefined
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  handleDelete: PropTypes.func
};

export default TagList;