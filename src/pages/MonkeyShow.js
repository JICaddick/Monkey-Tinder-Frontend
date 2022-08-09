import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class MonkeyShow extends Component {
  render() {
    let {monk} = this.props
    return (
      <>
        <Card className='cardcontainer'>
          <CardImg
            alt="monkey image"
            src= {monk.image} 
            />
          <CardBody>
            <CardTitle tag='h5'>
              Hi, my name is {monk.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6">
              {monk.age} years old
            </CardSubtitle>
            <CardText>
              I enjoy {monk.enjoys}
            </CardText>
            <NavLink to={"/monkeyindex/"}>
              <Button>Update Monkey</Button>
            </NavLink>
            <NavLink to={`/monkeyindex/${this.props.monk.id}`}>
              <Button onClick={() => this.props.deleteMonkey(monk.id)}>
                Delete Monkey Profile
              </Button>
            </NavLink>
          </CardBody>
        </Card>
      </>
    )
  }
}

export default MonkeyShow