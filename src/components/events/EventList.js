
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
              className="ui button"
              onClick={() => {
                this.props.history.push("/events/new")
              }
              }>
              Add Event
          </button>
          </div>
          <section >
            {
              this.props.events.map(events =>
                <div className="article list" key={events.id}>
                <div className="ui card">
                  <h4 className="header">{events.name}</h4><br></br>
                  <div className="ui small feed">{events.date}<br></br>
                  {events.location}</div><br></br>
                  <button
                    onClick={() => this.props.deleteEvent(events.id)}
                    className="ui bottom attached button">Delete
                </button>
                  <button
                    onClick={() => this.props.history.push(`/events/edit/${events.id}`)}
                    className="ui bottom attached button">Edit
                </button>
                    </div>

                </div>
              )
            }
          </section>
      </React.Fragment>
        )

      }
    }

