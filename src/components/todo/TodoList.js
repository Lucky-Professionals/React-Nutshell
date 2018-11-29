import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
         <section className="todos list">
        {
          this.props.todos.map(todo =>
            <div key={todo.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {todo.text}
                  <p>give me text</p>
                  <Link className="nav-link" to={`/tasks/${todo.id}`}>Details</Link>
                  {/* <a href="#"
                    //TODO:make delete work onClick={() => this.props.deleteAnimal(animal.id)}
                    className="card-link">Delete</a> */}
                </h5>
              </div>
            </div>
          )}
      </section>
      </React.Fragment>
    )
  }
}

export default TodoList