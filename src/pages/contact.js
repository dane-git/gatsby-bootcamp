import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const contactMe = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <h1>Contact US</h1>
        <div class="contact-info">
          <address>
            <a href="mailto:example@example.com">Email us</a>
            <a href="tel:555-555-5555">555-555-5555</a>
            <br />
            12345 Main St. <br />
            Anytown, Ok 12345
          </address>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default contactMe
