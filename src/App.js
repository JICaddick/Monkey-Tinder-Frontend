import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonkeyIndex from './pages/MonkeyIndex'
import MonkeyShow from './pages/MonkeyShow'
import MonkeyNew from './pages/MonkeyNew'
import MonkeyEdit from './pages/MonkeyEdit'
import NotFound from './pages/NotFound'
import monkey from './mockMonkey.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      monkey: monkey
    }
  }

  createNewMonkey = (theNewMonkeyObject) =>{
    console.log(theNewMonkeyObject);
  }

  createNewMonkey = (theNewMonkeyObject) => {
    console.log(theNewMonkeyObject)
  }

  updateMonkey = (monkey, id) => {
    console.log("monkey:", monkey)
    console.log("id:", id)
  }

  render() {
    console.log('appjs state', this.state)
    return (
      <>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/monkeyedit/:id" render={(props) => {
                let id = +props.match.params.id
                let monkey = this.state.monkey.find(monkeyObject => monkeyObject.id === id)
                return(
                  <MonkeyEdit
                    monkey = {monkey}
                    updateMonkey = {this.updateMonkey}
                  /> 
                ) 
              }}/>
              <Route path="/monkeyindex" render={() => <MonkeyIndex monkey={this.state.monkey} /> } />
              <Route path="/monkeynew" render={() => {
                return <MonkeyNew createNewMonkey={this.createNewMonkey}/>
                }} />
              <Route path="/monkeyshow/:id" render={(props) => {
                let id = +props.match.params.id // adding + sign will allow it to do conversion
                // console.log(typeof id); // returns that id = string
                let monk = this.state.monkey.find(monkObject => monkObject.id === id)
                // console.log(monk); // undefined
                return <MonkeyShow monk={monk}/>
              }} />
              <Route component={NotFound}/>
            </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App