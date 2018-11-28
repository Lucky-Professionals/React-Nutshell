import React, { Component } from "react"
import AppViews from "./AppViews"
import NavBar from "./nav/NavBar"

import "./Nutshell.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfilePage from "./profile/profile";


export default class Nutshell extends Component {
    render() {
        return (
            <React.Fragment>
              <NavBar />
              <AppViews />
              <ProfilePage />
            </React.Fragment>
        )
    }
}

