import React, { PropTypes } from 'react'
import QRCode from 'qrcode.react'
import classnames from 'classnames'

import './SocialShare.less'

const SocialShare = ({ meta }) => {
  const { tags, title } = meta
  const encodedShareLink = encodeURI(window.location.href.replace('#', '!#'))
  const formattedHashTags = tags.map(tag => `#${tag}#`).join(' ')
  const encodedShareContent = encodeURI(`${title} ${formattedHashTags} | 最美博客`)

  const socialShare = [
    { name: 'twitter', icon: 'fa-twitter' },
    { name: 'facebook', icon: 'fa-facebook' },
    { name: 'pocket', icon: 'fa-get-pocket' }
  ]

  return (
    <div className="social-share">
      {socialShare.map((share, index) => (
        <a key={index}>
          <i className={classnames('fa faa-shake animated', share.icon)}/>
        </a>)
      )}
      <a href={`http://service.weibo.com/share/share.php?url= ${encodedShareLink}&amptitle=${encodedShareContent}`} target="_blank">
        <i className="fa fa-weibo faa-shake animated"/>
      </a>
      <a className="weixin-qr">
        <i className="fa fa-weixin faa-shake animated"/>
        <div className="qr-code">
          <QRCode value={encodedShareLink}/>
        </div>
      </a>
    </div>
  )
}

SocialShare.propTypes = {
  meta: PropTypes.object.isRequired
}
SocialShare.defaultProps = {}

export default SocialShare
