import React, { Component } from "react"
import { Image } from 'semantic-ui-react'
import finn from "./images/finn.jpg"
import "./profile.css"


export default class ProfilePage extends Component {

  state = {
    location: "",
    favFood: "",
    favColor: "",
    bio: ""
}

  render () {
  return (
    <React.Fragment>
      <h2 className="titleTop list">Welcome to Nutshell, Finn!</h2>
      <Image className="profilePic" src={finn} size='medium' centered />
      
      <div>
        <h3>Name:</h3>
        <p>Finn</p>
        <h3>Location:</h3>
        <p>Nashville,TN</p>
        <h3>My Favorite Food:</h3>
        <p>Bananas</p>
        <h3>Favorite Color:</h3>
        <p>Blue</p>
        <h3>About Me:</h3>
        <p>Good boi</p>
      </div>
      
      <div className="profileBtn">
        <button type="button"
           className="">Edit your info</button>
      </div>
    </React.Fragment>

  )
  }
}

                              
