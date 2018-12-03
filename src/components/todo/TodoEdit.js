import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class TodoEdit extends Component {

  state = {

  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount() {
    const todo = this.props.todos.find(a => a.id === parseInt(this.props.match.params.todoId))
    this.setState(todo)
  }

  constructNewTodo = (evt) => {
    evt.preventDefault()

    let editedText = {
      text: this.state.text,
      dueDate:this.state.dueDate
    }
    this.props.editTodo(this.state.id, editedText)
      .then(() => {
        this.props.history.push("/todos")
      })
  }

  render() {
    return (
      <React.Fragment>
        <form className="todoForm list">
          <div className="form-group">
            <label htmlFor="todoName">Task</label>
            <input type="text" 
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
              placeholder={this.state.text} />
          </div>
          <div className="form-group ">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date"  
              className="form-control"
              onChange={this.handleFieldChange}
              id="dueDate"
              placeholder={this.state.dueDate}  />
          </div>
          <button type="submit" onClick={this.constructNewTodo} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}