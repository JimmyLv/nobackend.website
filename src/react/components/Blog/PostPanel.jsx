import { Link } from 'react-router'

export default ({postList, title}) => (
  <div className="panel panel-primary">
    <div className="panel-heading">{title}</div>
    <div className="panel-body">
      {postList.map((post, index) => (
        <Link key={index} to={`/note-blog/category/${ post.category }/post${ post.url }`}
              className="list-group-item clearfix">
          {post.title}
          <span className="badge">{ post.shortdate }</span>
        </Link>
      ))}
    </div>
  </div>
)