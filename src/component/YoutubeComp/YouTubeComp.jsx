import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="http://propertyandthecity.com/wp-content/uploads/2019/05/main-games-46.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton, x hari yang lalu'
}

export default YouTubeComp;