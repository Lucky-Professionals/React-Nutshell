import React, { Component } from 'react'
// import EventItem from "../events/EventItem"

export default class EventList extends Component {
  // render() {

  //   const eventNode = this.props.events.map( (event) => {
  //     return (<EventItem singleEvent={event} key={event.id} />)
  //   })

  // return (<ul>{eventNode}</ul>
  //   )
  // }
  render() {
    return (
      <section className="eventsList">
        {
          this.props.events.map(events =>
            <div key={events.id}>
              {events.name}
              {events.date}
              {events.location}
            </div>
          )
        }
      </section>
    )
  }
}