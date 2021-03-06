import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient content">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired
}

export default Page

export const aboutPageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
