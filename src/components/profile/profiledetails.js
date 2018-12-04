import React, { Component } from "react"
import { Segment, Image } from 'semantic-ui-react'
import "./profile.css"
import joe from "./images/joe.jpg"




export default class ProfileDetails extends Component {
  render() {

    const profile = this.props.profiles.find(a => a.id === parseInt(this.props.match.params.profileId)) || {}


    return (
    <Segment>
    <div key={profile.id}>
    <Image src={joe} size='large' floated='right' />
    <h2>{profile.name}</h2>
    <p>{profile.location}</p>
    <br></br>
    <h4>Feed Me:</h4>
    <p>{profile.favFood}</p>
    <h4>I love the color:</h4>
    <p>{profile.favColor}</p>
    <br></br>
    <p>{profile.quote}</p>
    </div>
  </Segment>
    )}
}










