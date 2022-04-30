import React from "react";
import PropTypes from "prop-types";

const ItemName = props => {
  if (props.isComplete) {
    return (
        <p
        onChange={props.handleCompletion}>
        {props.children}
        </p> 
    );
  }

  return <span class="completeHover" onClick={props.toggleIsComplete}>{props.children}</span>;
};

ItemName.propTypes = {
  item: PropTypes.string.isRequired,
  handleCompletion: PropTypes.func.isRequired,
  toggleIsComplete: PropTypes.func.isRequired
};

export default ItemName;
