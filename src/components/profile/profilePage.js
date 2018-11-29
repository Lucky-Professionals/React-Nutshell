import React, { Component } from "react"
import { Image, Card, Icon } from 'semantic-ui-react'
import finn from "./images/finn.jpg"
import andy from "./images/andy.jpg"
import "./profile.css"


export default class ProfilePage extends Component {


  render () {
  return (
    <div className="cardSet">
       <Card>
    <Image src={finn} />
    <Card.Content>
      <Card.Header>Finn</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2018</span>
      </Card.Meta>
      <Card.Description>Finn is a good boi looking for pets</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  </div>
)
  }
}

                              
