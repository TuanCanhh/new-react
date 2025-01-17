// class components
// fuctioon components

import React from "react";

class MyComponents extends React.Component {
  state = {
    name: 'canh',
    address: 'hn',
    age: 23
  };

  handleClick = (event) => {
    console.log("Sự kiện: onClick", this.state.name, event);
  };

  handleContextMenu = (event) => {
    console.log("Sự kiện: onContextMenu", event);
  };

  handleDoubleClick = (event) => {
    console.log("Sự kiện: onDoubleClick", event);
  };

  handleDrag = (event) => {
    console.log("Sự kiện: onDrag", event);
  };

  handleDragEnd = (event) => {
    console.log("Sự kiện: onDragEnd", event);
  };

  handleDragEnter = (event) => {
    console.log("Sự kiện: onDragEnter", event);
  };

  handleDragExit = (event) => {
    console.log("Sự kiện: onDragExit", event);
  };

  handleDragLeave = (event) => {
    console.log("Sự kiện: onDragLeave", event);
  };

  handleDragOver = (event) => {
    console.log("Sự kiện: onDragOver", event);
  };

  handleDragStart = (event) => {
    console.log("Sự kiện: onDragStart", event);
  };

  handleDrop = (event) => {
    console.log("Sự kiện: onDrop", event);
  };

  handleMouseDown = (event) => {
    console.log("Sự kiện: onMouseDown", event);
  };

  handleMouseEnter = (event) => {
    console.log("Sự kiện: onMouseEnter", event);
  };

  handleMouseLeave = (event) => {
    console.log("Sự kiện: onMouseLeave", event);
  };

  handleMouseMove = (event) => {
    console.log("Sự kiện: onMouseMove", event);
  };

  handleMouseOut = (event) => {
    console.log("Sự kiện: onMouseOut", event);
  };

  handleMouseOver = (event) => {
    console.log("Sự kiện: onMouseOver", event);
  };

  handleMouseUp = (event) => {
    console.log("Sự kiện: onMouseUp", event);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and from {this.state.address}

        <button onClick={this.handleClick}>Click me</button>
        <button onContextMenu={this.handleContextMenu}>Right-click me</button>
        <button onDoubleClick={this.handleDoubleClick}>Double-click me</button>
        <button onDrag={this.handleDrag}>Drag me</button>
        <button onDragEnd={this.handleDragEnd}>DragEnd me</button>
        <button onDragEnter={this.handleDragEnter}>DragEnter me</button>
        <button onDragExit={this.handleDragExit}>DragExit me</button>
        <button onDragLeave={this.handleDragLeave}>DragLeave me</button>
        <button onDragOver={this.handleDragOver}>DragOver me</button>
        <button onDragStart={this.handleDragStart}>DragStart me</button>
        <button onDrop={this.handleDrop}>Drop me</button>
        <button onMouseDown={this.handleMouseDown}>MouseDown me</button>
        <button onMouseEnter={this.handleMouseEnter}>MouseEnter me</button>
        <button onMouseLeave={this.handleMouseLeave}>MouseLeave me</button>
        <button onMouseMove={this.handleMouseMove}>MouseMove me</button>
        <button onMouseOut={this.handleMouseOut}>MouseOut me</button>
        <button onMouseOver={this.handleMouseOver}>MouseOver me</button>
        <button onMouseUp={this.handleMouseUp}>MouseUp me</button>
      </div>
    );
  }
}

export default MyComponents;

