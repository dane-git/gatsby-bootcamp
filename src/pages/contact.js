import React from "react"

import Layout from "../components/layout"

const contactMe = () => {
  return (
    <Layout>
      <div>
        <h1>Contact US</h1>
        <div className="contact-info">
          <address>
            <a href="mailto:example@example.com">Email us</a>
            <a href="tel:555-555-5555">555-555-5555</a>
            <br />
            12345 Main St. <br />
            Anytown, Ok 12345
          </address>
        </div>
      </div>
    </Layout>
  )
}

export default contactMe
