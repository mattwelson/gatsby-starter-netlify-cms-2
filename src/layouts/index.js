import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:500,600,700,800"
      rel="stylesheet"
    />
    <Helmet title={data.site.siteMetadata.title} />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
