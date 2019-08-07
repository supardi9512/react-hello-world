import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';
import {BrowserRouter, Route, Link} from 'react-router-dom';
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
            <BrowserRouter>
                {/* <div>
                    <p>YouTube Component</p>
                    <hr/>
                    <YouTubeComp 
                        time="7.12" 
                        title="Tutorial React JS - Bagian 1"
                        desc ="2x ditonton, 2 hari yang lalu"/>
                    <YouTubeComp 
                        time="8.02" 
                        title="Tutorial React JS - Bagian 2"
                        desc ="200x ditonton, 10 hari yang lalu"/>
                    <YouTubeComp 
                        time="5.04" 
                        title="Tutorial React JS - Bagian 3"
                        desc ="500x ditonton, 4 hari yang lalu"/>
                    <YouTubeComp 
                        time="4.12" 
                        title="Tutorial React JS - Bagian 4"
                        desc ="1k ditonton, 14 hari yang lalu"/>
                    <YouTubeComp />



                    <p>Counter</p>
                    <hr/>
                    <Product />



                    <p>LifeCycle Component</p>
                    <hr/>
                    {
                        // jika showComponent=true , munculkan komponennya, namun jika false tidak munculkan apapun
                        this.state.showComponent ? <LifeCycleComp /> : null
                    }

                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost />
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product/">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product/" component={Product} />
                    <Route path="/lifecycle/" component={LifeCycleComp} />
                </Fragment>
            </BrowserRouter>
            
        )
    }
}

export default Home;