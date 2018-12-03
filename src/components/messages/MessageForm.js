import React, { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css';
import { Button, Comment, Form } from 'semantic-ui-react'


export default class MessageForm extends Component {

    state = {
        messageId: "",
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
            message: this.state.message,
            date: new Date().toISOString(),
            userId: credentials.id
        }
        console.log(this.props)
        this.props.addMessage(messages)
        this.setState({
            messageId: "",
            message: "",
            date: ""
        })

        // .then(() => this.props.history.push("/messages"))

    }

    render() {

        return (
            <React.Fragment>
                <Form className="messageForm">
                    <Form.Field>
                        <label htmlFor="messageId"></label>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleFieldChange}
                            id="message" value={this.state.message}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button onClick={this.newMessage} content='Add Comment' labelPosition='left' icon='comments outline' primary />
                </Form>
            </React.Fragment>
        )
    }
}


