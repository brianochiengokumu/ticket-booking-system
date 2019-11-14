import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import nairobi from '../assets/nairobi.jpeg'
import machakos from '../assets/machakos.jpeg';
import mombasa from '../assets/mombasa.jpeg';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CardDeck>
        <Card>
          <Card.Img variant="top" src={ machakos} />
          <Card.Body>
            <Card.Title id='active1' enabled ='true'>Machakos Event</Card.Title>
            <Card.Text>
              This is another opportunity to have all the laughter to make you relax with friends and family.
              Come join the churchil family as we make this event the most memorable ever. All ages are invited 
              to our show.
            </Card.Text>
            {/* <Link to="/login" className="nav-link">
                  Admin Login
                </Link> */}
            <Card.Link href="/poorfile">DELETE TICKET</Card.Link>
            <Card.Link href="#">ENABLE TICKET</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={nairobi} />
          <Card.Body>
            <Card.Title id='active2' enabled ='true'>Nairobi Event</Card.Title>
            <Card.Text>
            This is another opportunity to have all the laughter to make you relax with friends and family.
            {' Come join the churchil family as we make this event the most memorable ever. All ages are invited to our show. '}
            </Card.Text>
            <Card.Link href="/poorfile">DELETE TICKET</Card.Link>
            <Card.Link href="#">ENABLE TICKET</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={mombasa} />
          <Card.Body>
            <Card.Title id='active3' enabled ='true'>Mombasa Event</Card.Title>
            <Card.Text>
            This is another opportunity to have all the laughter to make you relax with friends and family.
              Come join the churchil family as we make this event the most memorable ever. All ages are invited 
              to our show.
            </Card.Text>
            <Card.Link href="/poorfile">DELETE TICKET</Card.Link>
            <Card.Link href="#">ENABLE TICKET</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      </div>
    )
  }
}

export default Profile
