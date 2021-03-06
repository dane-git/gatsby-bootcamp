import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  // below is what is KNOWN AS a tagged template literal;
  // essentially it allows the string to be processed by the function in the tag -> in this case: graphql
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <div className="basic-nav">
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
