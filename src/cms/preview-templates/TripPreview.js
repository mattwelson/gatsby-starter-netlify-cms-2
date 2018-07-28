import React from 'react'
import PropTypes from 'prop-types'
import { TripTemplate } from '../../templates/page'

const TripPreview = ({ entry, widgetFor }) => (
  <TripTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TripPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default TripPreview
