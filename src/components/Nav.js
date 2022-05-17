import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom"


function Nav() {
  return (
    <StyledNav>
        <h1 className='logo'><Link to='/'>Capture</Link></h1>
        <ul>
            <li><Link to="/" >1. About Us</Link></li>
            <li><Link to="/work" >2. Our Work</Link></li>
            <li><Link to="/contact" >3. Contract Us</Link></li>
       
        </ul>
    </StyledNav>
  )
}


const StyledNav= styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a{
      color: white;
      text-decoration: none;
    
  }

  ul{
      display: flex;
      list-style: none;
  }

  .logo{
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
  }

  li{
      margin-left: 3rem;
      font-size: 0.5rem;

      a{
        font-size: 0.8rem;
      }
  }

`;

export default Nav
