
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./events.css"
export default class EventList extends Component {

  render() {
    return (
      <React.Fragment>
          <div className="eventsButton">
            <button type="button"
              className="add-event-btn"
              onClick={() => {
                this.props.history.push("/events/new")
              }
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
                    onClick={() => this.props.deleteEvent(events.id)}
                    className="event-delete-btn">Delete
                </a>
                  <button
                    onClick={() => this.props.history.push(`/events/edit/${events.id}`)}
                    className="edit-event-btn">Edit
                </button>

                </div>
              )
            }
          </section>
      </React.Fragment>
        )

      }
    }

