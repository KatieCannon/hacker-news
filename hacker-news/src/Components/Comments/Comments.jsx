import React,{Component} from 'react'
import CommentVote from '../CommentVote/CommentVote'
import * as api from '..//../Api'
class Comments extends Component {
    state ={
comments:[]
    } 
    render() {
        console.log(this.state.comments, "COMMENTS")
        return(
this.state.comments.map(comment => {
    let commentBy = comment.created_by;
    return (
    <p key={comment._id}>
    <br/>
      <>{comment.body}</>
      <br />
      
    <>written by:{commentBy.name}</>
      <button onClick={()=>this.removeComment(comment)}>Delete Comment</button>
                <CommentVote
                  votes={comment.votes}
                  article={this.props.article}
                  _id={comment._id}
                  section={"comments"}
                  comment={comment}
                />
                </p>
                
        )
})
        )}


    componentDidMount = () => {
        console.log(this.props.article._id)
        this.fetchComments(this.props.article._id)
    }

    fetchComments = (id) => {
        api.getArticleComments(id).then(comments => {
            console.log(comments, "here");
            this.setState({
              comments
            });
          });
    }

    removeComment = (comment) => {
        console.log(comment,"comment to delete")
       const id = comment._id
        api.deleteComment(id).then(
          this.setState({
            comments:this.state.comments.filter(comment => comment._id !== id)
          })
        )}
}

export default Comments