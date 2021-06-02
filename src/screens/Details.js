import React from 'react'

const Details = () => {
    return (
        <main id="details-sec">
            <div className="container">
                <header>
                    <div className="header-icon">
                        <i className="fa fa-angle-left arrow-left" aria-hidden="true"></i>
                    </div>
                    <span className="container page-title">Details</span>
                    <div className="icon-group">
                        <div className="header-icon2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="header-icon2 relative">
                            <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
                            <span className="cart-num">9</span>
                        </div>
                    </div>
                </header>
            </div>
            <section id="img-sec">
                <div className="display-img">
                    <img src="/img/bestshoe.jpeg" alt="product image"/>
                </div>
            </section>
            <section id="prod-desc">
                <div className="container">
                    <p className="name">NIKE Huararche 2019</p>
                    <p className="description">Get comfy and comfortable with the new 2019 designer
                        sneaker for all your events </p>
                    <p className="price">N45,000 - N80,000 /Piece</p>    
                </div>
            </section>
        </main>
    )
}

export default Details
