import React, { Component } from 'react';
import Header from './Nav/Header';
import Banner from './Pages/Banner'
import Shelf from './Pages/Shelf'
import Search from './Pages/Search'
import Products from './Others/Products'
import Cart from './Pages/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  constructor() {
    super()
    this.state = {
      products: Products,
      searchfield: '',
      cart: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

  }
  componentDidMount() {
    this.setState({ products: Products });
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  handleChange(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);
    if (existingProduct.length > 0) {
      const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
      const updatedUnitsProduct = { ...existingProduct[0], units: existingProduct[0].units + product.units };
      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      });
    } else {
      this.setState({ cart: [...this.state.cart, product] })
    }
  }

  handleDelete = (i) => {
    let productsCopy = this.state.cart.slice();
    productsCopy.splice(i, 1);
    this.setState({cart: productsCopy});
  }

  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <Router>
        <div>
          <Header cart={this.state.cart} />
          <Route path="/" exact render={props =>
            <div>
              <Banner />
              <Search searchChange={this.onSearchChange} />
              <Shelf products={filteredProducts} handleChange={this.handleChange} />
            </div>} />
          <Route path="/cart" render={props => <div>
            <Cart cart={this.state.cart} handleDelete={this.handleDelete} total={this.state.cart.reduce((a,c)=>(a+c.price * c.units), 0)}/>

          </div>} />

        </div>
      </Router>
    )
  }
}

export default App;
