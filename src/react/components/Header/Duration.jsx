import React, { PropTypes } from 'react'

function pad(string) {
  return (`0${string}`).slice(-2)
}

function format(seconds) {
  const date = new Date(seconds * 1000)
  const mm = date.getMinutes()
  const ss = pad(date.getSeconds())
  return `${mm}:${ss}`
}

const Duration = ({ className, seconds }) => (
  <time dateTime={`P${Math.round(seconds)}S`} className={className}>
    {format(seconds)}
  </time>
)

Duration.propTypes = {
  className: PropTypes.string.isRequired,
  seconds: PropTypes.number.isRequired
}
Duration.defaultProps = {
  className: 'duration'
}

export default Duration