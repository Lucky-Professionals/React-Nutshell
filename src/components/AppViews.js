import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import TodoForm from './todo/TodoForm'
import TodoList from './todo/TodoList'
import DataManager from '../module/DataManager';

class AppViews extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    const newState = {}
    
    DataManager.getAll("todos")
      .then(allTodos => {
        newState.todos = allTodos
      })
      .then(() => this.setState(newState))

  }

  render() {
    return (
      <React.Fragment>

         <Route exact path="/todos" render={(props) => {
          return <TodoList {...props} todos={this.state.todos}/>
        }} />

        <Route path="/todos/new" render={(props) => {
          return <TodoForm  />
        }} />

      </React.Fragment>
    )
  }
}

export default AppViews