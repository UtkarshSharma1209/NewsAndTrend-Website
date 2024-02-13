import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <a href='https://www.nbcnews.com/politics'>POLITICS</a>
              </li>
              <li>
                <a href='https://www.nbcnews.com/business'>BUSINESS</a>
              </li>
              <li>
                <a href='https://www.nbcnews.com/world'>WORLD</a>
              </li>
              <li>
                <a href="https://www.nbcnews.com/tech-media">TECH</a>
              </li>
              <li>
                <a href="https://www.nbcnews.com/health">HEALTH</a>
              </li>
              <li>
                <a href="https://www.nbcnews.com/culture-matters">CULTURE AND TRENDS</a>
              </li>
              <li>
                <Link to='/'>DISCUSSION PORTAL</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
