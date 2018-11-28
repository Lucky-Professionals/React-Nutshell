import React, {Component} from 'react'

export default class TodoForm extends Component {

  handleFieldChange = (evt) => {
    this.props.setTodoItemState(evt.target.value)
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="new todo item" onChange={this.handleFieldChange} />
        <button onClick={() => {
          this.props.addTodo()
        }}>
        +
        </button>
      </div>
    )
  }
}