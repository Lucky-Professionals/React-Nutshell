import React, { Component } from "react"
import "./profile.css"

export default class ProfileEdit extends Component {
  state = {
    name: "",
    location: "",
    favFood: "",
    favColor: "",
    quote: "",
    id: null,
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount() {
    const editProfile = this.props.profiles.find(a => a.id === parseInt(this.props.match.params.profilesId))
    this.setState({ ...editProfile })
  }

  newProfile = (evt) => {
    evt.preventDefault()

    let editedProfile = {
      name: this.state.name,
      location: this.state.location,
      favFood: this.state.favFood,
      favColor: this.state.favColor,
      quote: this.state.quote,
      id: this.state.id
    }
    this.props.editProfile(this.state.id, editedProfile)
      .then(() => {
        this.props.history.push("/profile")
      })
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
              placeholder={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location" placeholder={this.state.location} />
          </div>
          <div className="form-group">
            <label htmlFor="favFood">Favorite Food</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="favFood" placeholder={this.state.favFood} />
          </div>
          <div className="form-group">
            <label htmlFor="favColor">Favorite Color</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="favColor" placeholder={this.state.favColor} />
          </div>
          <div className="form-group">
            <label htmlFor="quote">Like I always say...</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="quote" placeholder={this.state.quote} />
          </div>

          <button type="submit" onClick={this.newProfile} className="btn btn-primary">Save Your Profile</button>
        </form>
      </React.Fragment>
    )
  }
}

