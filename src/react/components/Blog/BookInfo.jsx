import React, { PropTypes } from 'react'
import classnames from 'classnames'

const BookInfo = ({ book }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">{book.title}</div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-4 col-xs-12 center">
          <img src={book.cover} alt="cover" className="img-thumbnail"/>
        </div>
        <div className="col-md-8 col-xs-12">
          <table className="table table-bordered">
            <tbody>
              <tr><td style={{ width: '80px' }}>作者</td><td>{book.author}</td></tr>
              <tr><td>出版商</td><td>{book.publisher}</td></tr>
              <tr><td>语言</td><td>{book.language}</td></tr>
              <tr><td>链接</td><td><a href="{book.link}" title="{book.link}" target="_blank">图书链接</a></td></tr>
              <tr><td>状态</td>
                <td>
                  <span
                    className={classnames('label', {
                      'label-success': book.status === '已读',
                      'label-info': book.status === '在读',
                      'label-default': book.status !== '已读' && book.status !== '在读'
                    })}
                  >{book.status}</span>
                </td>
              </tr>
              <tr><td>评论</td><td>{book.description}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

BookInfo.propTypes = {
  book: PropTypes.object.isRequired
}
BookInfo.defaultProps = {}

export default BookInfo
