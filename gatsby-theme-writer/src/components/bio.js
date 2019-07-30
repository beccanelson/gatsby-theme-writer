import React from "react"
import Image from "gatsby-image"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import SocialIcons from "./social-icons"
import { graphql, useStaticQuery } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  return (
    <>
      <Flex sx={{ justifyContent: "flex-end" }}>
        <SocialIcons social={data.site.siteMetadata.social} />
      </Flex>
      <Flex
        sx={{
          borderTop: "1px solid #eee",
          paddingTop: 3,
          paddingBottom: 3,
          marginBottom: 3,
          alignItems: "center",
        }}
      >
        <Image
          sx={{
            borderRadius: "50%",
            marginRight: 3,
            minWidth: [100, 120],
            maxHeight: [100, 120],
          }}
          fixed={data.avatar.childImageSharp.fixed}
        />
        <div>
          <p>{data.site.siteMetadata.description}</p>
        </div>
      </Flex>
    </>
  )
}

export default Bio

const bioQuery = graphql`
  query Bio {
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          instagram
          twitter
        }
      }
    }
  }
`