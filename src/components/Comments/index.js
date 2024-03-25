import {Component} from 'react'
import './index.css'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  deleteComment = commentId => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(
        eachComment => eachComment.id !== commentId,
      ),
    })
  }
  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        } else {
          return eachComment
        }
      }),
    }))
  }
  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  addComment = event => {
    event.preventDefalut()

    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-cotainer ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }
  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div>
        <div>
          <h1>Comments</h1>

          <form onSubmit={this.addComment}>
            <p>Say something about 4.0 Technologies</p>
            <input
              value={nameInput}
              type="text"
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              value={commentInput}
              placeholder="Your Comment"
              onChange={this.onChangeComment}
              rows="6"
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
          />
        </div>
        <hr />
        <p>{commentsList.length} Comments</p>

        <ul>{this.renderCommentsList()}</ul>
      </div>
    )
  }
}
export default Comments
