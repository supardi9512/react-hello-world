// libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// pages
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// style
import './Home.css';

class Home extends Component {

    // nilai awal, untuk lifecycle unmounting
    state = {
        showComponent: true
    }

    // component lifecycle unmounting, untuk menghilangkan komponen
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product/">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product/" component={Product} />
                    <Route path="/lifecycle/" component={LifeCycleComp} />
                    <Route path="/youtube-component/" component={YoutubeCompPage} />
                </Fragment>
            </Router>
            
        )
    }
}

export default Home;