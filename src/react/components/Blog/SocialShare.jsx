import React, { PropTypes } from 'react'
import QRCode from 'qrcode.react'

const SocialShare = ({ meta }) => {
  const { tags, title } = meta
  const encodedShareLink = encodeURI(window.location.href.replace('#', '!#'))
  const formattedHashTags = tags.map(tag => `#${tag}#`).join(' ')
  const encodedShareContent = encodeURI(`${title} ${formattedHashTags} | 最美博客`)

  return (
    <div className="aside3-share">
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
