import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    } 

    // fungsi Untuk memanggil data get 
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    // menghapus data dengan axios
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        console.log('init state: ', this.state.formBlogPost);
        console.log('new value: ', formBlogPostNew);
        let title = event.target.value
        this.setState({
            formBlogPost: title
        }, () => {
            // console.log('value obj formBlogPost: ', this.state.formBlogPost);
        })
        
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
        this.getPostAPI()
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit">Simpan</button>
                </div>
                {
                    // looping data dari API
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}
 
export default BlogPost;