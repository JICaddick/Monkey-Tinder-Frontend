import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class MonkeyNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMonkey: {
        name:"",
        age: "",
        enjoys: "",
        image:""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const {newMonkey} = this.state
    newMonkey[e.target.name] = e.target.value
    this.setState({newMonkey: newMonkey})
  }

  handleSubmit = () => {
    this.props.createNewMonkey(this.state.newMonkey)
    this.setState({ submitted: true})
  }

  render() {
    return (
        <Form className='newmonkey'>
          <FormGroup>
            <Label for='name'> 
              Name 
            </Label>
            <Input
              type='text'
              name='name'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='age'> 
              Age 
            </Label>
            <Input
              type='text'
              name='age'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='enjoys'>
              enjoys
            </Label>
            <Input
              type='text'
              name='enjoys'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='image'>
              Image
            </Label>
            <Input
              type='text'
              name='image'
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            name='submit'
            onClick={this.handleSubmit}> 
            Submit Monkey 
          </Button>
          { this.state.submitted && <Redirect to='/monkeyindex'/>}
          </Form>
    )
  }
}

export default MonkeyNew