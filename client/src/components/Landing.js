import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import nairobi from '../assets/nairobi.jpeg'
import machakos from '../assets/machakos.jpeg';
import mombasa from '../assets/mombasa.jpeg';



class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
  <CardDeck>
  <Card>
    <Card.Img variant="top" src={ machakos} />
    <Card.Body>
      <Card.Title>Machakos Event</Card.Title>
      <Card.Text>
        This is another opportunity to have all the laughter to make you relax with friends and family.
        Come join the churchil family as we make this event the most memorable ever. All ages are invited 
        to our show.
      </Card.Text>
      <Card.Link href="#">Buy Ticket</Card.Link>
      <Card.Link href="#">Check out more!!!</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={nairobi} />
    <Card.Body>
      <Card.Title>Nairobi Event</Card.Title>
      <Card.Text>
      This is another opportunity to have all the laughter to make you relax with friends and family.
      {' Come join the churchil family as we make this event the most memorable ever. All ages are invited to our show. '}
      </Card.Text>
      <Card.Link href="#">Buy Ticket</Card.Link>
      <Card.Link href="#">Check out more!!!</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={mombasa} />
    <Card.Body>
      <Card.Title>Mombasa Event</Card.Title>
      <Card.Text>
      This is another opportunity to have all the laughter to make you relax with friends and family.
        Come join the churchil family as we make this event the most memorable ever. All ages are invited 
        to our show.
      </Card.Text>
      <Card.Link href="#">Buy Ticket</Card.Link>
      <Card.Link href="#">Check out more!!!</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
      </div>
    )
  }
}

export default Landing
