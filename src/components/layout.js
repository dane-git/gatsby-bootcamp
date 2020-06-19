import React from "react"

import Header from "./header"
import Footer from "./footer"

// import the base style sheet to the layout component, because the layout component is used on every page.
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header></Header>
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
