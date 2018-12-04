import React, { Component } from 'react'
import { Button, Icon, Header } from 'semantic-ui-react'
import TodoForm from './TodoForm';
import "./todos.css"

class TodoList extends Component {

  findUserId = () => {
    return localStorage.getItem("credentials")
  }

  //when called this will change completed from false to true and patch it into 
  makeCompletedTodo = (id) => {
    const completedTodo = {
      completed: true
    }
    this.props.editTodo(id, completedTodo)
  }
  render() {
    const credentials = JSON.parse(localStorage.getItem('credentials'))

    // Filter only todos that are false(uncompleted) and that have the correct user id
    const uncompletedTodos = this.props.todos.filter(todos =>
      todos.userId === credentials.id && todos.completed === false) || {}


    return (
      <React.Fragment>
        {/* Todos Icon  */}
        <Header color="blue" as='h2' icon textAlign='center'>
          <Icon name='bell outline' />
          <Header.Content>To Do List</Header.Content>
        </Header>

        {/* Pulls our form first */}
        <TodoForm {...this.props} />
        {/* individual list of tasks */}
        <section className="containerTodo">
          {
            uncompletedTodos.map(todos =>
              <div key={todos.id} >
                <div className="containerTodo">
                  <div className="todos">
                    <Button color="blue" onClick={() => this.makeCompletedTodo(todos.id)} animated >
                      <Button.Content visible><Icon name='check' />
                      </Button.Content>
                      <Button.Content hidden>
                        Done
                      </Button.Content>
                    </Button>
                    <p className="centerText space textTodo">{todos.text}</p>
                    <p className="centerText space">{todos.dueDate}</p>
                    <Button.Group size="mini" >
                      <Button
                        color="teal"
                        onClick={() => this.props.history.push(`/todos/edit/${todos.id}`)}
                      >Edit</Button>
                      <Button.Or />
                      <Button
                        color="red"
                        onClick={() => this.props.deleteTodo(todos.id)} className="card-link">
                        Delete</Button>
                    </Button.Group>
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

