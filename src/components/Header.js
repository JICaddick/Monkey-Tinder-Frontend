import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className='monkeyhead'>
          <header>
            <h2 className='logo'>Monkey Tinder</h2>
            <NavLink to={"/"}>
              <button>Home</button>
            </NavLink>  
            <NavLink to={"/monkeyindex"}>
              <button>Meet Your Mates</button> 
            </NavLink>
            <NavLink to={"/monkeynew"}>
              <button>Create your primal profile</button>
            </NavLink>
          </header>   
        </div> 
      </>
    )
  }
}

export default Header