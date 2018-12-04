import React, { Component } from "react"
import { Image, Card, Button, Icon, Header } from 'semantic-ui-react'
import rebel2 from "./images/rebel2.jpg"
import "./profile.css"

export default class ProfilePage extends Component {


  render() {
    return (
      <React.Fragment>
        <Header color="blue" as='h2' icon textAlign='center'>
          <Icon name='user circle' />
          <Header.Content>User Profiles</Header.Content>
        </Header>   
        <div className="profileBtn">
          <Button color="blue" fluid onClick={() => {this.props.history.push("/profile/new")}}>
            <Button.Content>Add Your Profile!</Button.Content>
            </Button>
        </div>     
        <section className="cards">
          {
            this.props.profiles.map(profiles =>
              <div key={profiles.id} className="list">
                <Card>
                  <div className="profileCards">
                    <Image src={rebel2} />
                    <Card.Description>
                      <Card.Header>{profiles.name}</Card.Header>
                      <Card.Meta>{profiles.location}</Card.Meta>
                      <br></br>
                      <Card.Description>{profiles.quote}</Card.Description>
                    </Card.Description>
                    <br></br>
                    <section>

                    </section>
                    <section>
                      <div className="edBtns">
                        <Button.Group>
                          <Button color="teal" onClick={() => this.props.history.push(`/profile/edit/${profiles.id}`)}
                            className="editBtn">Edit
                     </Button>
                          <Button.Or />>
                    <Button color="red" onClick={() => this.props.deleteProfile("profiles", profiles.id)}
                            className="deleteBtn">
                            Remove
                     </Button>
                        </Button.Group>
                      </div>
                    </section>
                  </div>
                </Card>
              </div>
            )
          }
        </section>

      </React.Fragment>
    )
  }
}




