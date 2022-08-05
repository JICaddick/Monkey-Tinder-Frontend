<<<<<<< HEAD
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
=======
import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
import { Redirect } from 'react-router-dom'

class MonkeyNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMonkey: {
<<<<<<< HEAD
        name:"",
        age: "",
        enjoys: "",
        image:""
      },
=======
        name: "",
        age: "",
        enjoys: "",
        img: ""
      },
      // info is not automatically submitted
>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
      submitted: false
    }
  }

  handleChange = (e) => {
<<<<<<< HEAD
    const { newMonkey } = this.state
    newMonkey[e.target.name] = e.target.value
    this.setState({ newCat: newMonkey })
=======
    const {newMonkey} = this.state
    // extract the key(name) from the newMonkey input and assign it the value
    newMonkey[e.target.name] = e.target.value
    // console.log(this.state)
    this.setState({newMonkey: newMonkey})
>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
  }

  handleSubmit = () => {
    this.props.createNewMonkey(this.state.newMonkey)
<<<<<<< HEAD
    this.setState({ submitted: true})
  }


=======
    this.setState({ submitted: true })
  }

>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
  render() {
  // So you can see your input storing in appropriate field
  // console.log('from monkeyNew', this.state)
  console.log('app js state:', this.state)
    return (
      <>
<<<<<<< HEAD
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            name="name" 
            onChange={this.handleChange}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            type="text" 
            name="age" 
            onChange={this.handleChange}

        />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input 
            type="text" 
            name="enjoys"
            onChange={this.handleChange}

          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input 
            type="text" 
            name="image" 
            onChange={this.handleChange}

          />
        </FormGroup>
        <Button
          name="submit"
          onClick={this.handleSubmit}
          >Submit Monkey
        </Button>
        { this.state.submitted && <Redirect to="/monkeyindex"/> }
      </Form>
=======
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
>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
      </>
    )
  }
}

export default MonkeyNew