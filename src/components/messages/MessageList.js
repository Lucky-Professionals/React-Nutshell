import React, { Component } from 'react'
import './Message.css'

export default class MessageList extends Component {
    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))

        return (
            <React.Fragment>
                <button type="button" className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/messages/new")
                    }
                    }>
                    Create new message
            </button>
                {
                    this.props.messages.map(messages =>
                        <div id={`message--${messages.id}`} key={messages.id} className="messageCard">
                            <section>
                                <p>From:{this.findUserName(messages)}</p>
                                <p>To:{messages.to}</p>
                                <p>{messages.message}</p>
                                <p>{messages.date}</p>
                                <button
                                    onClick={() => this.props.deleteMessage(messages.id)
                                        .then(() => this.props.history.push("/messages"))}
                                >Delete
                                    </button>
                                <button
                                    onClick={() => this.props.history.push(`/messages/edit/${messages.id}`)}
                                    className="card-link-edit"><span>Edit</span>
                                    </button>

                            </section>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}
