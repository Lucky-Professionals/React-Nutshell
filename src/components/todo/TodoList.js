import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./todos.css"

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
                
        <section className="todos list">
          {
            this.props.todos.map(todos =>
              <div key={todos.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {/* <img src={employees} className="icon--employees" /> */}
                    <p className="centerText">{todos.text}hmmm</p>
                    {/* <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link> */}
                    {/* TODO:make delete work onClick={() => this.props.deleteAnimal(animal.id)} */}
                    {/* <a href="#" onClick={() => this.props.deleteEmployee(employee.id)} className="card-link">Delete</a> */}
                  </h5>
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