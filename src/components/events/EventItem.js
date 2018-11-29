import React, { Component } from 'react';

export default class EventItem extends Component {
  render() {
    return (<li>{this.props.singleEvent.text}</li>)
  }
}