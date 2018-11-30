import React, { Component } from "react"
import "./profile.css"
import rebel2 from "./images/rebel2.jpg"




export default class ProfileDetails extends Component {
  render() {
      
      const profile = this.props.profiles.find(a => a.id === parseInt(this.props.match.params.profileId)) || {}

      return (
          <section className="detailsCard list">
              <div key={profile.id} className="detailsCard">
                  <div className="card-body">
                      <h4 className="card-title">
                          <img src={rebel2} className="icon--user" alt="User Details" />
                          <p className="card-name">{profile.name}</p>
                      </h4>
                      <p className="card-title">{profile.location}</p>
                      
                  </div>
              </div>
          </section>
      )
  }
}