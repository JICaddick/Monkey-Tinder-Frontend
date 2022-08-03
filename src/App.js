import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonkeyIndex from './pages/MonkeyIndex'
import MonkeyShow from './pages/MonkeyShow'
import MonkeyNew from './pages/MonkeyNew'
import MonkeyEdit from './pages/MonkeyEdit'
import NotFound from './pages/NotFound'
import mockMonkey from './mockMonkey.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      monkey: mockMonkey
    }
  }


  render() {
    // console.log(this.state.monkey)
    return (
      // Wrap entire return in <Router>
      <>
        <Router>
          {/* Header and Footer and anything else you want on every page should be inside of the Router but outside of the Switch */}
          <Header/>
            <Switch>
              {/* exact looks for the base URL */}
              <Route exact path="/" component={Home} />
              <Route path="/monkeyedit" component={MonkeyEdit} />
              <Route path="/monkeyindex" render={() => <MonkeyIndex monkey={this.state.monkey} /> } />
              <Route path="/monkeynew" component={MonkeyNew} />
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