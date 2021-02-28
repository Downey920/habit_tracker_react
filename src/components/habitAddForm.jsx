import React, { PureComponent, createRef } from "react";

class HabitAddForm extends PureComponent {
  formRef = createRef();
  inputRef = createRef();

  handleSubmit = e => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    this.props.onSubmit(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form
        ref={this.formRef}
        className="add-form"
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
