import React, { Component } from "react"
import { Segment, Image, Button } from 'semantic-ui-react'
import finn from "./images/finn.jpg"
import sleepyboi from "./images/sleepyboi.jpg"

const src1 = finn
const src2 = sleepyboi

export default class ProfilePage extends Component {
  render () {
    return (
  <Segment>
    <h2>Welcome to your profile page</h2>
    <Image src={src1} size='medium' centered />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>

    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <Image src={src2} size='small' centered />
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
      adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
      utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
      convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
<Button.Group>
  <Button color="yellow">Edit</Button>
  <Button.Or />
  <Button color="red">Delete</Button>
</Button.Group>
  </Segment>
  
    )
  }
}

