import { Route } from 'react-router-dom'
import React, { Component } from "react"
import TodoForm from './todo/TodoForm';

class AppViews extends Component {


  render() {
    return (
      <React.Fragment>

        <Route path="/tasks/new" render={(props) => {
          return <TodoForm  />
        }} />

      </React.Fragment>
    )
  }
}

export default AppViews