import React, { Component } from 'react'
import MessageForm from './MessageForm'
import EditMessageModal from './EditMessageModal'
import './Message.css'
import { Comment,Message } from 'semantic-ui-react'

export default class MessageList extends Component {

    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log(credentials)
        return (
            <React.Fragment>
                {
                    this.props.messages.map(messages =>
                        <div id={`message--${messages.id}`} key={messages.id} className="MessageCard">
                            <Message floating>
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
                                            {
                                                 messages.userId === credentials.id ? (
                                                     <React.Fragment >
                                                <Comment.Actions>
                                                    <Comment.Action
                                                        onClick={() => this.props.deleteMessage(messages.id)
                                                            .then(() => this.props.history.push("/messages"))}
                                                    >delete
                                                    </Comment.Action>
                                                </Comment.Actions>
                                                <Comment.Actions>
                                                    <EditMessageModal {...this.props} messageId={messages.id} message={messages} />
                                                </Comment.Actions>
                                                </React.Fragment>
                                                 ): ""
                                    }


                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Message>
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