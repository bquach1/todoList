import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  if (props.isComplete) {
      return (
        <div>
          <button class="enlarge complete action" onClick={props.toggleIsComplete}>
        </button>
          <button className="enlarge action" onClick={props.handleRemove}>
          x
        </button></div>          
          
      );
  }
  return (
    <button className="enlarge action" onClick={props.handleRemove}>
      x
    </button>
  );
};

Button.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  toggleIsComplete: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired
};

export default Button;
