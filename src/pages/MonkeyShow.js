import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class MonkeyShow extends Component {
  render() {
    // console.log(this.props.monkey);
    let {monk} = this.props
    return (
      <>
        <Card>
          <CardImg
            alt="monkey image"
            src= {monk.image} 
            width="100%"
          />
          <CardBody>
            <CardTitle tag='h5'>
              Hi, my name is {monk.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {monk.age} years old
            </CardSubtitle>
            <CardText>
              I enjoy {monk.enjoys}
            </CardText>
            <NavLink to={`/monkeyedit/${this.props.monk.id}`}>
              <Button>Edit Monkey Profile</Button>
            </NavLink>
            {/* Delete monkey button */}
          </CardBody>
        </Card>
      </>
    )
  }
}

export default MonkeyShow