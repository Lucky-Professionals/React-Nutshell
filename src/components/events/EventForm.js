import React, { Component } from 'react';

export default class EventForm extends Component {
  state = {
    name: "",
    date: "",
    location: ""
  }


  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)

}

constructNewEvent = evt => {
  evt.preventDefault()

  const events = {
    name: this.state.name,
    date: this.state.date,
    location: this.state.location

  }

  this.props.addEvent("events", events).then(() => this.props.history.push("/events"))

}

  render() {
    return (
      <form className="eventForm list">
      <div className="event-form-group">
        <label htmlFor="eventName">Event</label>
        <input type="text" required
          className="event-form-control"
          onChange={this.handleFieldChange}
          id="event-name"
          placeholder="Event Name" />
      </div>
      <div className="event-form-group">
            <label htmlFor="Date"></label>
            <input type="date" required
              className="event-form-control"
              onChange={this.handleFieldChange}
              id="date"
              placeholder="Date" />
          </div>
          <div className="event-form-group">
            <label htmlFor="Location">Location</label>
            <input type="text" required
              className="event-form-control"
              onChange={this.handleFieldChange}
              id="event-location"
              placeholder="Event Location" />
          </div>
          <button type="submit" onClick={this.constructNewEvent} className="save-event-btn">Save</button>
        </form>
    )
  }
}