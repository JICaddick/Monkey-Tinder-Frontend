import React, { Component } from 'react'
import homepage from '../assets/homepage.jpeg'

class Home extends Component {
  render() {
    return (
      <>
        <div className='homepagestuff'>
          <h1>Welcome to Monkey Tinder</h1>
          <img src={homepage}/>
          <h2>Where you can find your pri-MATE!</h2>
        </div>

        {/*  Intro with links to take you to : See all available monkeys (more info button), a specific monkey (edit/ delete), Make a new monkey profile  */}
      </>
    )
  }
}

export default Home