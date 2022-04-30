import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          isComplete={item.isComplete}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleIsComplete={() => props.toggleIsComplete(item.id)}        
          setComplete={text => props.setComplete(text,item.id)}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeItemAt: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  setComplete: PropTypes.func.isRequired
};

export default List;
