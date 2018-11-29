import React, { Component } from "react"

export default class TodoForm extends Component {

  // Set initial state
  state = {
    text: "",
    dueDate: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <React.Fragment>
        <form className="todoForm list">
          <div className="form-group">
            <label htmlFor="todoName">Task</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="todoName"
              placeholder="Add a task..." />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">dueDate</label>
            <input type="date"  required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dueDate" placeholder="Due date" />
          </div>
          {/* TODO: add click event functionality  */}
          <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}