import React, { Component, Link } from "react"
import { Image, Card, Icon } from 'semantic-ui-react'
import ProfileForm from './profileForm'
import rebel2 from "./images/rebel2.jpg"
import "./profile.css"


export default class ProfilePage extends Component {


  render() {
    return (
      <React.Fragment>
        <section>
          {
            this.props.profiles.map(profiles =>
              <div className="card list">
              <Card key={profiles.id}>
              <Image src={rebel2} />
              <Card.Content>
              <Card.Header>{profiles.name}</Card.Header>
              <Card.Meta>{profiles.location}</Card.Meta>
              <Card.Description>{profiles.quote}</Card.Description>
              </Card.Content>
              </Card>
              </div>
            )
          }
        </section>

       

      </React.Fragment>
    )
  }
}


