import React, { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css';
import { Button, Comment, Form } from 'semantic-ui-react'


export default class MessageForm extends Component {

    state = {
        messageId: "",
        messageTo: "",
        message: "",
        date: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    newMessage = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const messages = {
            id: this.state.messageId,
            to: this.state.messageTo,
            message: this.state.message,
            date: new Date().toISOString(),
            userId: credentials.id
        }

        this.props.addMessage(messages)
            .then(() => this.props.history.push("/messages"))
    }

    render() {

        return (
            <React.Fragment>
                <Form className="messageForm"> 
                    <Form.Field>
                        <label>Message</label>
                        <label htmlFor="messageId"></label>
                        <label htmlFor="messageTo">Message To:</label>
                        <input onChange={this.handleFieldChange}
                            id="messageTo" placeholder='Message To' />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="message">Message:</label>
                        <input onChange={this.handleFieldChange}
                            id="message" placeholder="..." />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit' onClick={this.newMessage}>Send</Button>
                </Form>
            </React.Fragment>
        )
    }
}

