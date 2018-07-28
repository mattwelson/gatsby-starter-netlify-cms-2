import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive'

import Meta from './Meta'

const TripLinks = ({ trips, className }) =>
  trips && (
    <div className={`trip-links wrapper ${className}`}>
      {trips.map(trip => (
        <div key={trip.fields.slug} className="trip-links__item">
          <Overdrive id={trip.fields.slug}>
            <Link to={trip.fields.slug}>
              <div className="trip-links__image">
                <img role="presentational" src={trip.frontmatter.image} />
              </div>
              <h1>{trip.frontmatter.displayTitle}</h1>
              <Meta meta={trip.frontmatter.meta} className="trip-links__meta" />
            </Link>
          </Overdrive>
        </div>
      ))}
    </div>
  )

export default TripLinks
