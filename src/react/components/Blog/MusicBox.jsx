import React, { PropTypes } from 'react'

const MusicBox = ({ musicUrl }) => (
  <div className="aside3-music">
    <iframe frameBorder="no" marginHeight="0" width="330" height="86" src={musicUrl}>
    </iframe>
  </div>
)

MusicBox.propTypes = {
  musicUrl: PropTypes.string.isRequired
}

export default MusicBox