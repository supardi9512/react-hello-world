import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    // default atau pertama kali dipanggil ketika tampil
    constructor (props) {
        super(props); //digunakan karena mengextends Component
        this.state = {
            count: 1
        }
        console.log("constructor");
    }

    // dipanggil kedua ketika tampil
    // akan memiliki props dan state
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    // dipanggil keempat ketika tampil
    componentDidMount() {
        console.log("componentDidMount");
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    // mengizinkan isi dari componentDidMount
    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentUpdate");
        // console.log('nextProps: ', nextProps);
        console.log('nextState', nextState);
        console.log('This State: ', this.state)
        console.groupEnd();
        // jika state berikutnya bernilai 4 / lebih dari 4, maka tidak akan mengupdate komponen
        if(nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, provState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // dipanggil ketiga ketika tampil
    render() {
        console.log("render");
        return(
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleComp;