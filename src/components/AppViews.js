import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import TodoForm from './todo/TodoForm'
import TodoList from './todo/TodoList'

class AppViews extends Component {

  state = {
    todos: []
  }

  render() {
    return (
      <React.Fragment>

         <Route exact path="/tasks" render={(props) => {
          return <TodoList />
        }} />

        <Route path="/tasks/new" render={(props) => {
          return <TodoForm  />
        }} />

      </React.Fragment>
    )
  }
}

export default AppViews