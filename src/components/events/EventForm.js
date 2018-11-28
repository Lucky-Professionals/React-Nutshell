import React, { Component } from 'react';

export default class EventForm extends Component {

// handleFieldChange = (evt) => {
//   this.props.setTodoItemState(evt.target.value)

// }

  render() {
    return (
      <div>
        <input type="text" placeholder="Event" />
        <input type="date" />
        <input type="text" placeholder="Location" />
        <button placeholder="Save" onClick={() => {
          console.log("button clicked")
          this.props.DataManager.add()
        }}>
        <button placeholder="Edit" onClick={() => {
          console.log("button clicked")
          this.props.DataManager.edit()
        }}>
        +
        </button>
        </button>
      </div>
    )
  }
}