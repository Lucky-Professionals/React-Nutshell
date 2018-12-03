import React, { Component } from 'react'
import EditMessageForm from './EditMessageForm'
import './Message.css'
import { Button,Modal, Header,} from 'semantic-ui-react'


export default class EditMessageModal extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    render() {
        const { open, dimmer } = this.state

        return (
            <Modal trigger={<Button onClick={this.show(true)}>Edit</Button>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                    <EditMessageForm {...this.props} close={this.close}/>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}