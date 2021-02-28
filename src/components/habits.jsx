import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import HabitReset from "./habitReset";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onSubmit={this.props.onSubmit} />
        <ul className="habits">
          {this.props.habits.map(habit => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
        <HabitReset onReset={this.props.onReset} />
      </>
    );
  }
}

export default Habits;
