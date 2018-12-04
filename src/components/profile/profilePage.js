import React, { Component, Link } from "react"
import { Image, Card, Button, Icon, Header } from 'semantic-ui-react'
import joe from "./images/joe.jpg"
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
          <Button color="blue" fluid onClick={() => { this.props.history.push("/profile/new") }}>
            <Button.Content>Add Your Profile!</Button.Content>
          </Button>
        </div>
        <section className="cards">
          {
            this.props.profiles.map(profiles =>
              <div key={profiles.id} className="list">
                <Card>
                  <div className="profileCards">
                    <Image src={joe} />
                    <Card.Description>
                      <Card.Header>{profiles.name}</Card.Header>
                      <Card.Meta>{profiles.location}</Card.Meta>
                      <br></br>
                      <Card.Description>{profiles.quote}</Card.Description>
                    </Card.Description>
                    <br></br>
                    {/* Card Buttons */}
                    <section>
                      <div className="edBtns">
                        <Button.Group>
                          <Button color="teal" onClick={() => this.props.history.push(`/profile/edit/${profiles.id}`)}
                            className="editBtn">Edit
                          </Button>
                          <Button.Or />
                          <Button color="blue" onClick={() => this.props.history.push(`/profile/detail/${profiles.id}`)}
                            className="deleteBtn">
                            Details
                          </Button>
                          <Button.Or />
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




