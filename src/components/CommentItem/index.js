// Write your code here
import {formatDistanceToNow} from 'date-fns'
const CommentItem = props => {
  const {commentItem, toggleIsLiked, deleteComment} = props
  const {id, name, comment,isLiked,initialClassName,date} = commentItem
  const initial=name? name[0].toUpperCase():''
  const likeImageUrl= isLiked? "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
  const postedTime=formatDistanceToNow(date)
  const onClickLike = () => {
    toggleIsLiked(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }
  return (
    <li>
      <div>
        <p>{initial}</p>
      </div>
      <p>{name}</p>
      <p>{postedTime}</p>
      <p>{comment}</p>
      <img src={likeImageUrl} alt="like"/>
      <button onClick={onClickLike}>Like</button>
      <button><img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"/></button>
      <hr/>
    </li>
  )
}
export default CommentItem
