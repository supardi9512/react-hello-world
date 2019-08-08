import React, {Component} from 'react';
import Axios from 'axios';

class DetailPost extends Component {
    componentDidMount() {
        let id= this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`);
    }

    render() {
        return(
            <p>Detail Post</p>
        )
    }
}

export default DetailPost;