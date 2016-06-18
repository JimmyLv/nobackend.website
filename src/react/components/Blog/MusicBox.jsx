import React, { PropTypes } from 'react'
import './MusicBox.less'

const MusicBox = ({ musicUrl }) => (
  <div className="music-box">
    <iframe frameBorder="no" marginHeight="0" width="330" height="86" src={musicUrl}>
    </iframe>
  </div>
)

MusicBox.propTypes = {
  musicUrl: PropTypes.string.isRequired
}

export default MusicBox