import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import TripLinks from '../components/TripLinks'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { edges: trips } = data.trips

    return (
      <section className="section">
        <div className="content">
          <TripLinks trips={trips.map(t => t.node)} />

          <h1>Latest Stories</h1>

          {posts.map(({ node: post }) => (
            <div key={post.id}>
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    trips: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "trip" }, published: { eq: true } }
        fields: { parentTrip: { eq: null } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            image
            displayTitle
            templateKey
            date(formatString: "MMMM DD, YYYY")
            meta {
              text
              value
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
