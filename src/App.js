import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonkeyIndex from './pages/MonkeyIndex'
import MonkeyShow from './pages/MonkeyShow'
import MonkeyNew from './pages/MonkeyNew'
import MonkeyEdit from './pages/MonkeyEdit'
import NotFound from './pages/NotFound'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      monkey: []
    }
  }
  
  componentDidMount() {
    this.readMonkey()
    console.log(this.state)
  }
  
  readMonkey = () => {
    fetch("http://localhost:3000/monkeys")
    .then(response => response.json())
    .then(monkeyArr => this.setState({monkey: monkeyArr}))
    .catch(errors => console.log("Monkey read errors: ", errors))
  }
  
  createNewMonkey = (theNewMonkeyObject) =>{
    fetch("http://localhost:3000/monkeys",{
    body: JSON.stringify(theNewMonkeyObject),
    headers: {
      "Content-Type": "application/json"
    },
    method:"POST"
    })
    .then(response => response.json())
    .then(() => this.readMonkey())
    .catch(errors => console.log("Monkey new errors: ", errors))
  } 

  updateMonkey = (monkey, id) => {
    fetch(`http://localhost:3000/monkeys/${id}`,{
    body: JSON.stringify(monkey),
    headers: {
      "Content-Type": "application/json"
    },
    method:"PATCH"
    })
    .then(response => response.json())
    .then(()=> this.readMonkey())
    .catch(errors => console.log("Monkey update errors: ", errors))
  }

    deleteMonkey = (id) => {
    fetch(`http://localhost:3000/monkeys/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readMonkey())
    .catch(errors => console.log("Monkey delete errors:", errors))
  }

  render() {
    return (
      <>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/monkeyedit/:id" render={(props) => {
                let id = +props.match.params.id
                let monk = this.state.monkey.find(monkobject => monkobject.id === id)
                return <MonkeyEdit monk={monk} updateMonkey={this.updateMonkey} />
              }}/>
              <Route path="/monkeyindex" render={() => <MonkeyIndex monkey={this.state.monkey} /> } />
              <Route path="/monkeynew" render={() => {
                return <MonkeyNew createNewMonkey={this.createNewMonkey}/>
              }} />
              <Route path="/monkeyshow/:id" render={(props) => {
                let id = +props.match.params.id
                let monk = this.state.monkey.find(monkObject => monkObject.id === id)
                return <MonkeyShow monk={monk} deleteMonkey={ this.deleteMonkey } />
              }}/>
              <Route component={NotFound}/>
            </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App