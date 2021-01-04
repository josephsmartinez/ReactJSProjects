import React, { Component } from "react";

// React.Fragment removes the need to wrapping everything within a <div>
class Counter extends Component {
  // Controlled Component

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // Option 1 for handling "this" bind
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> // Unique keys helps react keep the DOM in sync
        ))}
      </ul>
    );
  }

  // handleIncrement is pass by method name reference not the call to the function
  render() {
    return (
      <div>
        <span style={this.styles} className={this.formatBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  formatBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
