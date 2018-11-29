import React, { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react'


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
                {/* <h2>Message</h2>
                <form className="messageForm">
                    <div className="form-group">
                        <section className="messageField">
                            <label htmlFor="messageId"></label>
                            <label htmlFor="messageTo">Message To:</label>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="messageTo"
                                placeholder="Message To"
                                size="35" />
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <section className="messageField">
                            <p></p>
                            <label htmlFor="message">Message:</label>
                            <p></p>
                            <textarea
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="message"
                                placeholder="..." rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Send Message</button>
                </form> */}
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

