import React, { Component } from 'react'
import EditMessageForm from './EditMessageForm'
import './Message.css'
import { Button,Modal, Header,Comment} from 'semantic-ui-react'


export default class EditMessageModal extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    render() {
        const { open, dimmer } = this.state

        return (
            <Modal trigger={<Comment.Action onClick={this.show(true)}>edit</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Edit Message' />
                <Modal.Content>
                    <EditMessageForm {...this.props} close={this.close}/>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}