import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <Fragment>
                <p class="section-title">Blog Post</p>
                <Post title="title" desc="desc" />
            </Fragment>
        )
    }
}

export default BlogPost;