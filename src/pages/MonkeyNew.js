import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class MonkeyNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMonkey: {
        name: "",
        age: "",
        enjoys: "",
        img: ""
      },
      // info is not automatically submitted
      submitted: false
    }
  }

  handleChange = (e) => {
    const {newMonkey} = this.state
    // extract the key(name) from the newMonkey input and assign it the value
    newMonkey[e.target.name] = e.target.value
    // console.log(this.state)
    this.setState({newMonkey: newMonkey})
  }

  handleSubmit = () => {
    this.props.createNewMonkey(this.state.newMonkey)
    this.setState({ submitted: true })
  }

  render() {
  // So you can see your input storing in appropriate field
  // console.log('from monkeyNew', this.state)
  console.log('app js state:', this.state)
    return (
      <>
        <Form>
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
          {/* if submitted is true then redirect to index page */}
          { this.state.submitted && <Redirect to='/monkeyindex'/>}
          </Form>
      </>
    )
  }
}

export default MonkeyNew