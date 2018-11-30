import React, { Component } from "react"
import "./profile.css"

export default class ProfileForm extends Component {
    state = {
      name: "",
      location: "",
      favFood: "",
      favColor: "",
      quote: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProfile = evt => {
      console.log(this.props)
        evt.preventDefault()
        
            const profiles = {
                name: this.state.name,
                location: this.state.location,
                favFood: this.state.favFood,
                favColor: this.state.favColor,
                quote: this.state.quote,
            }

            this.props.addProfile("profiles", profiles).then(() => this.props.history.push("/profile"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="profileForm list">
                    <div className="form-group">
                        <label htmlFor="profileName">Profile Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="location" placeholder="Location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favFood">Favorite Food</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="favFood" placeholder="Favorite Food" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favColor">Favorite Color</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="favColor" placeholder="Favorite Color" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quote">Like I always say...</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="quote" placeholder="Your quote" />
                    </div>
                    
                    <button type="submit" onClick={this.constructNewProfile} className="btn btn-primary">Save Your Profile</button>
                </form>
            </React.Fragment>
        )
    }
}

