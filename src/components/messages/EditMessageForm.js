import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class EditMessageForm extends Component {

    state = {

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId))
        this.setState(message)
    }

    newMessage = (evt) => {
        evt.preventDefault()

        let editedMessage = {
            message: this.state.message,
        }
        this.props.editMessage(this.state.id, editedMessage)
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
                            id="message" placeholder={this.state.to} />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit' onClick={this.newMessage}>Send</Button>
                </Form>
        </React.Fragment>
        )
    }
}