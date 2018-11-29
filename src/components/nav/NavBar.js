import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Icon } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Icon className="nav-link" name='home'  />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li> */}
      </ul>
    </nav>
    )
  }
}