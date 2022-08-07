import React, { Component } from 'react'
import homemonkey from "../assets/home-monkey.jpeg"

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <center>
            <h3>Home</h3>
            <img style= {{height: "300px", width:"auto" }} src={homemonkey} ></img>
          </center>
        </div>
      </>
    )
  }
}

export default Home