import React, { Component } from "react"
import DataManager from '../../module/DataManager'

export default class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()


        DataManager.getAll("users").then((user) => {
            const users = user.find(user => {
                return user.email === this.state.email && user.password === this.state.password
            })

            if (users) {
                localStorage.setItem("credentials", JSON.stringify(users))
                document.location.href = 'http://localhost:3000/profile'
            } else {
                alert("Please register before trying to login")
                document.location.href = 'http://localhost:3000/register'
            }
        })
    }

    render() {
        return (
            <div className="forms">
                <div className="loginForm">
                    <form onSubmit={this.handleLogin}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail">
                            Email address
                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputPassword">
                            Password
                        </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        )
    }


}