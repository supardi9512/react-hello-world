import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="Dummy Image"/>
            </div>
            <div className="content">
                <p className="title">Dummy Title</p>
                <p className="desc">Dummy Body Here</p>
            </div>
        </div>
    )
}

export default Post;