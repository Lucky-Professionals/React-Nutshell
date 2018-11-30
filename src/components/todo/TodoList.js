import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import TodoForm from './TodoForm';
import "./todos.css"

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>

        {/* add button */}

        <TodoForm className="form" />

        {/* individual list of tasks */}
        <section className="todos list">
          {
            this.props.todos.map(todos =>
              <div key={todos.id} className="card">
                <div className="container">
                  <div className="card-title">
                    <Button color="blue" animated>
                      <Button.Content visible><Icon name='check' /> 
                      </Button.Content>
                      <Button.Content hidden>
                      Done
                      </Button.Content>
                    </Button>
                    <p className="centerText">{todos.text}</p>
                    <p className="centerText">{todos.dueDate}</p>

                  

                    <Button.Group size="mini" >
                      <Button
                        color="teal"
                        onClick={() => this.props.history.push(`/todos/edit/${todos.id}`)}
                      >Edit</Button>
                      <Button.Or />
                      <Button
                        color="red"
                        onClick={() => this.props.deleteTodo(todos.id)} className="card-link">
                        >Delete</Button>
                    </Button.Group>

                    {/* <a href="#" onClick={() => this.props.deleteTodo(todos.id)} className="card-link">Delete</a> */}
                  </div>
                </div>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default TodoList