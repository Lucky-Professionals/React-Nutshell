import React, { Component } from "react"

import "./Nutshell.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfilePage from "./profile/profile";


export default class Nutshell extends Component {
    render() {
        return (
            <React.Fragment>
              <ProfilePage />
            </React.Fragment>
        )
    }
}

