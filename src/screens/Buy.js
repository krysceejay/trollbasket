import React from 'react'

const Buy = () => {
    return (
        <main id="buy-sec">
            <span className="container page-title">Trollbasket</span>
            <section className="sub-header">
                <div className="sub-header-single">
                    <div className="sub-header-single-1">
                     <i className="fa fa-map-marker marker" aria-hidden="true"></i>
                    </div>
                    <span>Lagos</span>
                    <i className="fa fa-angle-down arrow-icon" aria-hidden="true"></i>
                </div>
                <div className="sub-header-single">
                    <div className="sub-header-single-1">
                     <i className="fa fa-archive order" aria-hidden="true"></i>
                    </div>
                    <span>My Orders</span>
                </div>
                <div className="sub-header-single">
                    <div className="sub-header-single-1 relative">
                        <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
                        <span className="cart-num">9</span>
                    </div>
                    <span>Cart</span>
                </div>
            </section>
            <section id="search">
                <div className="container">
                    <form name="search" method="POST">
                        <div className="email-form">
                            <span className="form-control-wrap">
                                <input
                                    type="email"
                                    name="email"
                                    size="40"
                                    className="form-sub"
                                    placeholder="Search merchbuy"
                                />
                            </span>
                            <button type="submit" className="form-sub submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Buy
