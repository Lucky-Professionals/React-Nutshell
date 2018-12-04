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
    //getting our user id from our local storage
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    //the todo object
    const todo = {
      text: this.state.text,
      dueDate: this.state.dueDate,
      completed: false,
      userId: credentials.id
    }
    //add this will post our new entry to todos db then will clear the form
    this.props.addTodo(todo)
      .then(() => {
        this.setState({ text: "", dueDate: "" })
      }
      )

  }

  render() {

    return (
      <React.Fragment>
        <form className="todoForm containerTodo">
          <div className="form-group">
            <label htmlFor="todoName">Task</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
              value={this.state.text}
              placeholder="Add a task..." />
          </div>
        
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dueDate"
              value={this.state.dueDate}
            />
          </div>
          <button type="submit" onClick={this.constructNewTodo} className="btn btn-primary">Submit</button>
        </form>

      </React.Fragment>
    )
  }
}