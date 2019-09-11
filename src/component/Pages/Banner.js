import React, { Component } from 'react'

import image from '../images/bottom.png'

class Banner extends Component {
    render() {
        return (
            <div>
                <section id="banner" className="d-flex flex-wrap">
                            <h2 className="promo-title pl-5">JustOrder</h2>
                            <p className="lead pl-5"> Order amazing brunches and Desserts here </p>
                    <img src={image} className="bottom-img" />
                </section>

            </div>
        )
    }
}

export default Banner