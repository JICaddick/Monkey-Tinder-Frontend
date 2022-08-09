import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import homepage from '../assets/homepage.jpeg'

class Home extends Component {
  render() {
    return (
      <>
        <div className='homepagestuff'>
          <h1 className='welcomesign'>Welcome to Monkey Tinder</h1>
          <img src={homepage} className='homepagepic'/>
          <h2 className='welcomesign'>Find your pri-MATE!</h2>
          <NavLink to="/monkeyindex">
            <Button>
              Enter
            </Button>
          </NavLink>
        </div>
      </>
    )
  }
}

export default Home