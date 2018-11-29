import React, { Component, Link } from "react"
import { Image, Card, Icon } from 'semantic-ui-react'
import finn from "./images/finn.jpg"
import "./profile.css"


export default class ProfilePage extends Component {


  render () {
    return (
      <React.Fragment>
        <section className="profile list">
        {
            this.props.profiles.map(profiles =>
                <div key={profiles.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={finn} className="profilePic" alt="profile pic" />
                            <p className="card-name">{profiles}.name}</p></h4>
                            <Link className="nav-link" to={`/profiles/${profiles.id}`}>Details</Link>
                
                        
                    </div>
                </div>
            )
        }
        </section>
        <div className="profileBtn">
              <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/profile/new")}
                    }>Add</button>
        </div>
       </React.Fragment>
    )
  }
}

                              
