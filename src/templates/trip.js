import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const TripTemplate = ({ title, content, contentComponent }) => {
  const TripContent = contentComponent || Content

  return (
    <section className="section section--gradient content">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <TripContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TripTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const Trip = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TripTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

Trip.propTypes = {
  data: PropTypes.object.isRequired
}

export default Trip

export const TripQuery = graphql`
  query Trip($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
