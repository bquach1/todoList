import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

// Import components
import List from "./List";
import InputForm from "./InputForm";
import Header from "./Header";

class App extends Component {
  // getInitialState
  state = {
    list: [],
    pendingItem: ""
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  //Flips IsComplete bool
  toggleIsComplete = id => {
    console.log("isComplete", id);
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isComplete: !item["isComplete"]
          };
        }
        return item;
      })
    });
  };

  removeItemAt = id => {
    this.setState({ list: this.state.list.filter(item => id !== item.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  setComplete = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if(id === item.id) {
          return {            
            name,
            id
          };
        }
        return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          isComplete: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <InputForm
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />

        <List
          list={this.state.list}
          removeItemAt={this.removeItemAt}          
          toggleIsComplete={this.toggleIsComplete}      
          setComplete={this.setComplete}
        />
      </div>
    );
  }
}

export default App;
