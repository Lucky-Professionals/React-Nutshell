import React, { Component } from "react"
import './todos.css'

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

  constructNewTodo = evt => {
    evt.preventDefault()
      const todo = {
        text: this.state.text,
        dueDate: this.state.dueDate
      }
      // Create the task and redirect user to Todo list
      this.props.addTodo(todo).then(() => this.props.history.push("/todos"))
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
              id="text"
              placeholder="Add a task..." />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date"  required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dueDate"  />
          </div>
          {/* TODO: add click event functionality  */}
          <button type="submit" onClick={this.constructNewTodo} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}