import React, { Component } from 'react'
import MessageForm from './MessageForm'
import EditMessageForm from './EditMessageForm'
import './Message.css'
import { Button, Comment, Form, Modal, Header, Icon } from 'semantic-ui-react'

export default class MessageList extends Component {
    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log(this.props)
        return (
            <React.Fragment>
                {
                    this.props.messages.map(messages =>
                        <div id={`message--${messages.id}`} key={messages.id} className="messageCard">
                            <Comment.Group size='large'>
                                <Comment>
                                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author>{this.findUserName(messages)}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{messages.date}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                            <p>{messages.message}</p>
                                        </Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action
                                                onClick={() => this.props.deleteMessage(messages.id)
                                                .then(() => this.props.history.push("/messages"))}
                                            >delete
                                        </Comment.Action>
                                        </Comment.Actions>
                                        <Comment.Actions>
                                            <Modal trigger={<Button>edit</Button>} closeIcon>
                                                <Header icon='archive' content='Archive Old Messages' />
                                                <Modal.Content>
                                                    <EditMessageForm {...this.props} message={messages.message} />
                                                </Modal.Content>
                                                <Modal.Actions>
                                                    <Button color='red'>
                                                    <Icon name='remove' /> No
                                            </Button>
                                                    <Button color='green' type='submit' >
                                                    <Icon name='checkmark'/> Yes
                                            </Button>
                                                </Modal.Actions>
                                            </Modal>
                                        </Comment.Actions>

                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </div>
                    )
                }

                <MessageForm {...this.props} />
            </React.Fragment>
        )
    }
}
{/* <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
<Comment.Content>
  <Comment.Author>{this.findUserName(messages)}</Comment.Author>
  <Comment.Metadata>
    <div>{messages.date}</div>
  </Comment.Metadata>
  <Comment.Text>
      </ */}


    //   onClick={() => this.props.history.push(`/messages/edit/${messages.id}`)}
    //                                             className="card-link-edit"