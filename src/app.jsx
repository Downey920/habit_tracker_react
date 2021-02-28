import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = item.count;
        return { ...item, count: count > 0 ? count - 1 : 0 };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);

    this.setState({ habits });
  };

  handleSubmit = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count === 0) return item;
      return { ...item, count: 0 };
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCnt={this.state.habits.filter(habit => habit.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
