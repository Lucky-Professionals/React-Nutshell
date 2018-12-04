
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'
import "./events.css"
export default class EventList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="eventsButton">
          <Button type="button" className="ui labeled icon button"
            color="blue"
            onClick={() => {
              this.props.history.push("/events/new")
            }
            }>
            <i className="plus circle icon"></i>
            New Event
          </Button>
        </div>
        <section >
          {
            this.props.events.map(events =>
              <div className="article list" key={events.id}>
                <div className="ui centered card">
                    <div id="cardTextAlign" className="center aligned description">
                      <h3 className="ui center aligned dividing header">{events.name}</h3><br></br>
                        <div id="cardText" className="ui center aligned description">{events.date}<br></br>
                          {events.location}</div><br></br>
                        <div className="ui dividing header">
                        <Button.Group size="mini">
                          <Button
                            color="teal"
                            onClick={() => this.props.history.push(`/events/edit/${events.id}`)}
                            className="event-edit-button">Edit
                </Button>
                          <Button.Or />
                          <Button
                            color="red"
                            onClick={() => this.props.deleteEvent(events.id)}
                            className="event-delete-button">Delete
                </Button>
                        </Button.Group>
                      </div>
                    </div>
                  </div>
                </div>
            )
          }
        </section>
      </React.Fragment>
    )

  }
}

