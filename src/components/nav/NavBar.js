import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Icon, Button } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap shadow">
        <ul className="nav nav-pills">

          <li className="nav-item">
            <Link className="nav-link" to="/profile"><Icon name="user circle" size="large" />User Profiles</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/events"><Icon name="calendar alternate outline" size="large" />Events</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/news"><Icon name="newspaper outline" size="large" />News</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/messages"><Icon name="comments outline" size="large" />Messages</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/todos"><Icon name="bell outline" size="large" />To Do</Link>
          </li>

          {/* <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li> */}

        </ul>
        <p id="navTagline">Welcome to <img id="react-img" src="../../../react.png"></img> Nutshell!</p>
        <div className="logbtn">
        <Button animated onClick={() => {
          document.location.href = 'http://localhost:3000/login'
        }}>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-in alternate' />
          </Button.Content>
        </Button>
        <Button animated onClick={() => {
          localStorage.clear("credentials")
          document.location.href = 'http://localhost:3000'
        }}>
          <Button.Content visible>Logout</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out alternate' />
          </Button.Content>
        </Button>
        </div>      
        </nav>
    )
  }
}
