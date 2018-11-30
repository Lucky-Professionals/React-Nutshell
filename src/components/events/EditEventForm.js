import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class EditEventForm extends Component {

    state = {

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        const editEvent = this.props.events.find(a => a.id === parseInt(this.props.match.params.messageId))
        this.setState(editEvent)
    }

    newEvent = (evt) => {
        evt.preventDefault()

        let editedEvent = {
            message: this.state.message,
        }
        this.props.editMessage(this.state.id, editedEvent)
        .then(() => {
            this.props.history.push("/messages")
        })
    }

    render () {
        return (
        <React.Fragment>
 <Form className="messageForm">
                    <Form.Field>
                        <label>Message</label>
                        <label htmlFor="messageId"></label>
                        <label htmlFor="messageTo">Message To:</label>
                        <input onChange={this.handleFieldChange}
                            id="messageTo" placeholder={this.state.to} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="message">Message:</label>
                        <input onChange={this.handleFieldChange}
                            id="message" placeholder={this.state.message} />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit' onClick={this.newMessage}>Send</Button>
                </Form>
        </React.Fragment>
        )
    }
}