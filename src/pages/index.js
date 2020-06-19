import React from "react"
import { Link } from "gatsby" //Link -> optimized react component to creat very fast links witout full re-rendering of page.
// Link -> preloads content that you might be heading to
// USE Link to between page within gatsby and the classic a tag for external link

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Im a person who live somewhere </h2>
      <p>
        Need a developer? <a href="/contact">Contact Me</a>
      </p>
      <p>
        Need a developer <Link to="/contact">Contact Me Fast</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
