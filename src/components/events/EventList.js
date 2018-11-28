import React, { Component } from 'react'
import EventItem from "../events/EventItem"

export default class EventList extends Component {
  render() {

    const eventNode = this.props.events.map( (event) => {
      return (<EventItem singleEvent={event} key={event.id} />)
    })

  return (<ul>{eventNode}</ul>
    )
  }
}