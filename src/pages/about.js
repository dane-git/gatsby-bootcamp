import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const bio = () => {
  return (
    <div>
      <Header></Header>
      <h1>About Me</h1>
      <p>
        I am a person. I believe... At least i think so.
        <br /> This is the longest bio I could think of.
      </p>
      <Footer></Footer>
    </div>
  )
}

export default bio
