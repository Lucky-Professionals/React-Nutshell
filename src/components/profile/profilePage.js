import React, { Component } from "react"
import { Image, Card } from 'semantic-ui-react'
import rebel2 from "./images/rebel2.jpg"
import "./profile.css"


export default class ProfilePage extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="profileBtn">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/profile/new")
            }
            }>Add Your Profile!</button>
        </div>

        <section>
          {
            this.props.profiles.map(profiles =>
              <div key={profiles.id} className="list">
                <Card>
                  <Image src={rebel2} />
                  <Card.Description>
                    <Card.Header>{profiles.name}</Card.Header>
                    <Card.Meta>{profiles.location}</Card.Meta>
                    <Card.Description>{profiles.quote}</Card.Description>
                  </Card.Description>
                </Card>
              </div>
            )
          }
        </section>

      </React.Fragment>
    )
  }
}


