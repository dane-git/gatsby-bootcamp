import React from "react"
import { Link } from "gatsby"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Gatsby Bootcamp
        </Link>
      </h1>
      <nav>
        <div class="basic-nav">
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                My Blog
              </Link>
            </li>
            <li>
              <a
                className={headerStyles.navItem}
                href="https://www.google.com"
                target="_blank"
              >
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
