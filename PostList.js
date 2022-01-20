import React, {Component} from "react";
import axios from "axios";


 class PostList extends Component {
     constructor(porps) {
         super(porps)
         this.state = {
             posts: []
         }
     }
      componentDidMount() {
          axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(Response => {
                 console.log(Response)
                 this.setState({posts: Response.data})
             })
            .catch(error => {
                console.log(error) 
                this.setState({errorMsg: 'Error retreiving data'})
            }) 
        }
    render() {
        const { posts, errorMsg } = this.state
        return(
            <div>
                Post of list
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {errorMsg ? <div>{errorMsg}</div>: null}
            </div>
        )
    }
}

export default PostList;