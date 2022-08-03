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
    console.log(this.state.monkey)
    return (
      <>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/monkeyindex" component={MonkeyIndex} />
              <Route path="/monkeyshow" component={MonkeyShow} />
              <Route path="/monkeynew" component={MonkeyNew} />
              <Route path="/catedit" component={MonkeyEdit} />
              <Route component={NotFound}/>
            </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App