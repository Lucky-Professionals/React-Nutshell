import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Register extends Component {

    state = {
        username: "",
        userEmail: "",
        userPassword: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()
    }

    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/login'

        const users = {
            username: this.state.username,
            email: this.state.userEmail,
            password: this.state.userPassword,
        }
        this.props.addUser(users)
            .then(() => this.props.history.push("/login"))
    }

    render() {

        return (
            <div className="forms">
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
                            Register an account
    </Header>
    <Form size='large' onSubmit={this.handleLogin}>
    <Segment stacked>
                <div className="registerForm">
                        <Form.Input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus=""
                            fluid icon='user' iconPosition='left' />
                        <Form.Input onChange={this.handleFieldChange} type="email"
                            id="userEmail"
                            placeholder="Email address"
                            required="" autoFocus="" fluid
                            icon='mail'
                            iconPosition='left'
                            type='email'/>
                        <Form.Input onChange={this.handleFieldChange} type="password"
                            id="userPassword"
                            placeholder="Password"
                            required="" fluid
                            icon='lock'
                            iconPosition='left'
                            type='password' />
                        <Button  color='teal' fluid size='large' type="submit" onClick={this.handleButtonClick} className="btn btn-primary">
                            Register
                        </Button>
                </div>
     </Segment>
    </Form>
    </Grid.Column>
    </Grid>
            </div>
        )
    }
}