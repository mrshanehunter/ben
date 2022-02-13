import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fade } from "react-awesome-reveal"

const ContentContainer = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentContainer>
      <Fade cascade className="engrave">
        <h1>B</h1>
        <h1>E</h1>
        <h1>N</h1>
      </Fade>
    </ContentContainer>
  </Layout>
)

export default IndexPage
