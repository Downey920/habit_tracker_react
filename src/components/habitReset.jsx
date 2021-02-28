import React, { PureComponent, useImperativeHandle } from "react";

class HabitReset extends PureComponent {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <button className="habits-reset" onClick={this.handleReset}>
        Reset All
      </button>
    );
  }
}

export default HabitReset;
