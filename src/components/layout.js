import React from "react"

import Header from "./header"
import Footer from "./footer"

// import the base style sheet to the layout component, because the layout component is used on every page.
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
