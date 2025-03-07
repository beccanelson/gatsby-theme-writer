// eslint-disable-next-line
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <span
      sx={{
        fontFamily: "heading",
        textTransform: "uppercase",
        fontWeight: 100,
        fontSize: 0,
      }}
    >
      © {new Date().getFullYear()}, Powered by
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  )
}

export default Footer
