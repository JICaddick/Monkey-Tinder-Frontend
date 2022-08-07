import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap';

class MonkeyShow extends Component {
  render() {
    console.log(this.props.monkey);
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
              {monk.age}
                </CardSubtitle>
                <CardText>
              {monk.enjoys}</CardText>
          </CardBody>
        </Card>
      </>
    )
  }
}

export default MonkeyShow