import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class EditEventForm extends Component {

    state = {
      name:"",
      date:"",
      location:"",
      id:null
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        const editEvent = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventsId))
        this.setState({...editEvent})
    }


    newEvent = (evt) => {
        evt.preventDefault()

        let eventObject = {
          name:this.state.name,
          date:this.state.date,
          location:this.state.location,
          id:this.state.id

        }
        this.props.editEvent(this.state.id, eventObject)
        .then(() => {
            this.props.history.push("/events")
        })
    }

    render () {
      return (
        <form className="eventForm list">
        <div className="event-form-group">
          <label htmlFor="eventName">Event</label>
          <input type="text" required
            className="event-form-control"
            onChange={this.handleFieldChange}
            id="name"
            placeholder={this.state.name} />
        </div>
        <div className="event-form-group">
              <label htmlFor="Date">Date</label>
              <input type="date" required
                className="event-form-control"
                onChange={this.handleFieldChange}
                id="date"
                placeholder={this.state.date} />
            </div>
            <div className="event-form-group">
              <label htmlFor="Location">Location</label>
              <input type="text" required
                className="event-form-control"
                onChange={this.handleFieldChange}
                id="location"
                placeholder={this.state.location} />
            </div>
            <button type="submit" onClick={this.newEvent} className="save-event-btn">Save</button>
          </form>
      )}
}