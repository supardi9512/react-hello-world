import React, {Component} from 'react';
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

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
            <div>
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
            </div>
        )
    }
}

export default Home;