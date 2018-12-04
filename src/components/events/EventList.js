
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import DataManager from '../../module/DataManager'
import { Link } from "react-router-dom";
import { Button, Icon, Header, Card} from 'semantic-ui-react'
import "./events.css"
export default class EventList extends Component {
  credentials = JSON.parse(localStorage.getItem('credentials'))

  state = {
    events: []
  }

  deleteEvent = (events, id) => {
    DataManager.delete("events", id)
    .then(() => DataManager.getAllByUser("events", this.credentials.id))
    .then(allEvents => this.setState({
      events: allEvents
    })
    )
  }

  componentDidMount() {
    const newState = {}
    DataManager.getAll("events", this.credentials.id)
      .then(allEvents => {
        newState.events = allEvents
      })
      .then(() =>
        this.setState(newState))
  }

  render() {
    return (
      <React.Fragment>
        <div className="eventsHeader">
          <Header as='h2' className="center aligned icon" color="blue">
            <Icon name='calendar alternate outline icon' />
            <Header.Content>Events</Header.Content>
          </Header>
        </div>
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
            this.state.events.map(events =>
              <div className="center" key={events.id}>
                <div className="article list" >
                  {/* <Card > */}
                    <div id="eventCards" className="ui centered card">
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
                              onClick={() => this.deleteEvent("events", events.id)}
                              className="event-delete-button">Delete
                </Button>
                          </Button.Group>
                        </div>
                      </div>
                    </div>
                  {/* </Card> */}
                </div>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )

  }
}

