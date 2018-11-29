
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./events.css"
// import EventItem from "../events/EventItem"

export default class EventList extends Component {

  render() {
    return (
      <React.Fragment>
   {/* <Link className="event-link" to={`/events/addEvent`}>Add Event</Link> */}
        <div className="eventsButton">
          <button type="button"
            className="add-event-btn"
            onClick={() => {
              this.props.history.push("/events/new")}
            }>
            Add Event
        </button>
        </div>
        <section className="events list">
          {
            this.props.events.map(events =>
              <div key={events.id}>
                {events.name}<br></br>
                {events.date}<br></br>
                {events.location}
              <a href="#foo"
                onClick={() => this.props.deleteEvent("events", events.id)}
                className="event-delete-btn">Delete </a>
                </div>
            )
          }
        </section>
      </React.Fragment>
    )

  }
}

