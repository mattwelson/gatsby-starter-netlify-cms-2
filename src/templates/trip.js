import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Meta from '../components/Meta'

export const TripTemplate = ({
  title,
  content,
  contentComponent,
  description,
  meta,
  image,
  location
}) => {
  const TripContent = contentComponent || Content

  return (
    <article className="content no-pad">
      <div className="trip">
        <div className="trip__header">
          <div className="trip__image">
            <img role="presentational" src={image} />
          </div>
          <h2 className="trip__location">{location}</h2>
          <h1 className="trip__title">{title}</h1>
          <Meta meta={meta} className="trip__meta" />
        </div>
        <p className="trip__description">{description}</p>
        <TripContent content={content} />
      </div>
    </article>
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
      description={post.frontmatter.description}
      meta={post.frontmatter.meta}
      content={post.html}
      image={post.frontmatter.image}
      location={post.frontmatter.location}
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
        image
        description
        location
        meta {
          text
          value
        }
      }
    }
  }
`
