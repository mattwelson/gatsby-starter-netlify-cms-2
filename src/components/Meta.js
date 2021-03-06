import React from 'react'
import PropTypes from 'prop-types'

const Meta = ({ meta, className }) =>
  meta && (
    <div className={`meta ${className}`}>
      {meta.map(m => (
        <div className="meta__item" key={m.text}>
          <div className="meta__value">{m.value}</div>
          {m.image && (
            <div className="meta__image">
              <img src={m.image} alt={m.text} />
            </div>
          )}
          <div className="meta__text">{m.text}</div>
        </div>
      ))}
    </div>
  )

Meta.propTypes = {
  classNames: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  )
}

export default Meta
