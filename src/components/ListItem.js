import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ItemName from "./ItemName";
import Button from "./Button";

const ListItem = props => {
  if (props.isComplete) {
    return (
      <li class="completeHover complete">
        <ItemName
          isComplete={props.isComplete}
          item={props.item}
          toggleIsComplete={props.toggleIsComplete}
          handleCompletion={e => props.setComplete(e.target.value)}
        >
          {props.item}
        </ItemName>
        <Button
          isComplete={props.isComplete}
          toggleIsComplete={props.toggleIsComplete}
          handleRemove={props.handleRemove}
        />
      </li>
    );
  }
  
  return (
    <li class="completeHover">
      <ItemName
        isComplete={props.isComplete}
        item={props.item}
        toggleIsComplete={props.toggleIsComplete}
        handleCompletion={e => props.setComplete(e.target.value)}
      >
        {props.item}
      </ItemName>
      <Button
        isComplete={props.isComplete}
        toggleIsComplete={props.toggleIsComplete}
        handleRemove={props.handleRemove}
      />
    </li>
  );

};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  toggleIsComplete: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setComplete: PropTypes.func.isRequired
};

export default ListItem;
