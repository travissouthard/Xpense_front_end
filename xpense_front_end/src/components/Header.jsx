import React, { Component } from 'react'
import Login from "./Authorization/Login"
import Register from "./Authorization/Register"

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Xpense</h1>
        <Login />
        <Register />
      </header>
    )
  }
}

export default Header