import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'

export default class EditMessageForm extends Component {

    state = {
        // message: this.props.message
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        
    }

    componentDidMount() {
        // const message = this.props.messages.find(a => a.id === this.props.messageId)
        this.setState(this.props.message)
    }

    newMessage = (evt) => {
        evt.preventDefault()

        let editedMessage = {
            message: this.state.message,
        }
        this.props.editMessage(this.props.messageId, editedMessage)
        .then(() => {
            this.props.close()
        })
    }

    render () {
        return (
        <React.Fragment>
                    <Form className="messageForm"> 
                    <Form.Field>
                        <label htmlFor="messageId"></label>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleFieldChange}
                            id="message" defaultValue={this.props.message.message}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button icon='save' size='mini' onClick={this.newMessage}></Button>
                </Form>
        </React.Fragment>
        )
    }
}