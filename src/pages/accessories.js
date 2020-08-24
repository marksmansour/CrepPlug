import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

class PageComponent extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title="Accessories" />
        <div className="container container-wide pt-5">
          <div className="row wide-gutter">
            <div className="col-12 col-md-6">
              <Link to="/collections">
                <div className="image-card">
                  <Img
                    fixed={data.crepplug.childImageSharp.fixed}
                    className="img-fluid"
                    alt="CrepPlug"
                  />
                  <h2>Crepplug</h2>
                  <p>Coming Soon</p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/collections">
                <div className="image-card">
                  <Img
                    fixed={data.dcrease.childImageSharp.fixed}
                    className="img-fluid"
                    alt="D-Crease"
                  />
                  <h2>D-Crease</h2>
                  <p>Coming Soon</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageComponent

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fixed(width: 700, height: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "banners/collections.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 175) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crepplug: file(relativePath: { eq: "collections/crepplug.png" }) {
      ...cardImage
    }
    dcrease: file(relativePath: { eq: "collections/dcrease.png" }) {
      ...cardImage
    }
  }
`
