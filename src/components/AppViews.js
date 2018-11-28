import { Route } from 'react-router-dom'
import React, { Component } from "react"
import TodoForm from './todo/TodoForm';
// import TodoList from './todo/TodoList';

class AppViews extends Component {


  render() {
    return (
      <React.Fragment>

         {/* <Route exact path="/tasks" render={(props) => {
          return <TodoList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} /> */}

        <Route path="/tasks/new" render={(props) => {
          return <TodoForm  />
        }} />

      </React.Fragment>
    )
  }
}

export default AppViews