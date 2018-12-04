import React, { Component } from "react"
import DataManager from '../../module/DataManager'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
            <div className='login-form'>
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
                            Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.handleLogin}>
                            <Segment stacked>
                                <Form.Input onChange={this.handleFieldChange} type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required="" autoFocus="" fluid icon='mail' iconPosition='left' />
                                <Form.Input
                                    onChange={this.handleFieldChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required=""
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type='password'
                                />

                                <Button type="submit" className="btn btn-primary" color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='http://localhost:3000/register'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


}