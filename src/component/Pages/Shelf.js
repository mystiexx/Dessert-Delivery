import React, {Component} from "react"
import Stock from './Stock';

class Shelf extends Component {
    render(){
        const { products, handleChange } = this.props;

        const cardComponent = products.map((user, i) => {
            return <Stock key={i} id={products[i].id} name={products[i].name} 
            price={products[i].price} image={products[i].image} handleChange={handleChange}/>
        })
        return(
            <div>
                {cardComponent}
                </div>
        )
    }
}

export default Shelf;