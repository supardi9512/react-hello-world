import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // Memanggil API menggunakan cara default dari JSX
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // Memanggil menggunakan AXIOS
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    render() {
        return(
            <Fragment>
                <p class="section-title">Blog Post</p>
                {
                    // looping data dari API
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}
 
export default BlogPost;