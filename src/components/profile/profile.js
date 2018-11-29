import React, { Component } from "react"
import { Segment, Image, Button, Divider } from 'semantic-ui-react'
import finn from "./images/finn.jpg"
import "./profile.css"
import Dropzone from 'react-dropzone'
import request from 'superagent';

// 
const CLOUDINARY_UPLOAD_URL = "cloudinary://544545629131782:eVlSLLHImgDRHXDRClqR9VXu3Jc@andwa"
const CLOUDINARY_UPLOAD_PRESET = "oasjzcio"
const src1 = finn

export default class ProfilePage extends Component {

  state = {
    userId: "",
    friends: "",
    location: "",
    profilePic: ""
}

onImageDrop(files) {
  this.setState({
      uploadedFile: files[0]
  });

  this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

  upload.end((err, response) => {
      if (err) {
          console.error(err);
      }

      if (response.body.secure_url !== '') {
          this.setState({
              profilePic: response.body.secure_url
          });
      }
  });
}





  render () {
    return (
  <Segment>
    <h2 className="titleTop">Welcome to Nutshell, Finn!</h2>

    <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>

    <Image className="profilePic" src={finn} size='medium' centered />

    <p className="textboxCenter">
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
    <p className="textboxCenter">
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p className="textboxCenter">
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.

    </p>
      <div className="profileBtn">
        <Button.Group>
          <Button color="yellow">Edit</Button>
          <Button.Or />
          <Button color="red">Delete</Button>
        </Button.Group>
        </div>
          </Segment>
      
    )
  }
}

