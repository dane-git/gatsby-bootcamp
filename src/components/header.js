import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Gatsby Bootcamp</h1>
      <nav>
        <div class="basic-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me Fast</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/blog">My Blog</Link>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                Get out of here
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
