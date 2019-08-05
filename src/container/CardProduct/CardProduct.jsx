import React, {Component} from 'react';

class CardProduct extends Component {
    
    // nilai default
    state = {
        order: 4
    }

    // ketika Counter berubah, maka akan mengexecute props
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    // function untuk menambah order 
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order); // agar nilai pada keranjang/troley ikut berubah
        })
    }

    // function untuk mengurang order 
    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order); // agar nilai pada keranjang/troley ikut berubah
            })
        }
    }

    render() {
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="http://propertyandthecity.com/wp-content/uploads/2019/05/main-games-46.jpg" alt="product-image"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 410.000</p>
                <div className="counter">
                    {/* onClick={this.handleMinus} = memanggil function handleMinus ketika diklik */}
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    {/* Menampilkan nilai state order saat ini */}
                    <input type="text" value={this.state.order}/>
                    {/* onClick={this.handlePlus} = memanggil function handleMinus ketika diklik */}
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>            
        );
    }
}

export default CardProduct;