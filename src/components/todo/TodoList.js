import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="todoButton list">
          <button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/tasks/new")}
          }>
          New Todo
          </button>
        </div>

        <section className="todo list">
          {
            this.props.todos.map(todo =>
              <div key={todo.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                  {/* TODO: add icon or remove this */}
                    {/* <img src={dog} className="icon--dog" /> */}
                    {todo.name}
                    <Link className="nav-link" to={`/tasks/${todo.id}`}>Details</Link>
                    {/* <a href="#"
                      onClick={() => this.props.deleteAnimal(animal.id)}
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