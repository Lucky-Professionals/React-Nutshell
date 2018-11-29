import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import "./todos.css"

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>    
        <div className="todoButton list">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/todos/new")
            }
            }>
            Add Todos
          </button>
        </div>
             
        <section className="todos list">
        
          {
            this.props.todos.map(todos =>
              <div key={todos.id} className="card">
                <div >
                  <p className="card-title">
                  <Button icon='circle outline' />
                    {/* <img src={employees} className="icon--employees" /> */}
                    <p className="centerText">{todos.text}</p>
                    {/* <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link> */}
                    {/* TODO:make delete work onClick={() => this.props.deleteAnimal(animal.id)} */}
                    <a href="#" onClick={() => this.props.deleteTodo(todos.id)} className="card-link">Delete</a>
                  </p>
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