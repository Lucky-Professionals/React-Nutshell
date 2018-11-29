import React, { Component } from "react"
import { Link } from "react-router-dom";
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
            <section className="">
            {
                this.props.profile.map(profile =>
                    <div key={profile.id} className="">
                        <div className="">
                            <h4 className="">
                                <p className="">{profile.name}</p></h4>
                                <Link className="nav-link" to={`/animals/${profile.id}`}>Form</Link>
                              
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>

  )
  }
}

                              
