import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <nav>
    <NavLink exact to="/" activeClassName="active" >Dashboard</NavLink>
    <NavLink to="/add" activeClassName="active" >Add</NavLink>
    <NavLink to="/help" activeClassName="active" >Help</NavLink>
  </nav>
)