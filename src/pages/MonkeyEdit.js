import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class MonkeyEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedMonkey: {
        name: this.props.monkey.name,
        age: this.props.monkey.age,
        enjoys: this.props.monkey.enjoys,
        image: this.props.monkey.image
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {updatedMonkey} = this.state
    updatedMonkey[e.target.name] = e.target.value
    this.setState({updatedMonkey: updatedMonkey})
  }

  handleSubmit = () => {
    this.props.updateMonkey(this.state.updatedMonkey, this.props.monkey.id)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={ this.state.updatedMonkey.name }
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input 
              type="text" 
              name="age" 
              onChange={this.handleChange}
              value={ this.state.updatedMonkey.age }
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input 
              type="text" 
              name="enjoys"
              onChange={this.handleChange}
              value={ this.state.updatedMonkey.enjoys }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input 
              type="text" 
              name="image" 
              onChange={this.handleChange}
              value={ this.state.updatedMonkey.image }
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            >Submit Monkey
          </Button>
          {this.state.submitted && <Redirect to={`/monkeyshow/${this.props.monk.id}`} />}
        </Form>
      </>
    )
  }
}

export default MonkeyEdit