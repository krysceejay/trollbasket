import React from 'react'
import {truncate} from '../utils/functions'

const Buy = () => {
    return (
        <>
        <div id="tabs">
            <ul className="nav-list">
                <li>
                    <a>
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a className="current">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Buy</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <span>Deals</span>
                    </a>
                </li>
                <li>
                    <a >
                        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                        <span>Wallet</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>More</span>
                    </a>
                </li>
            </ul>
        </div>
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
            <section id="carousel">
                <div className="wrapper">
                    <div className="wrapper-item first-banner"></div>
                    <div className="wrapper-item main-banner">
                        <div className="item-content">
                            <span className="content-text">Having any <span className="text-color">issues</span> with your order?</span>
                            <button className="btn btn-contact">Contact Us</button>
                        </div>
                    </div>
                    <div className="wrapper-item third-banner "></div>
                </div>
            </section>
            <section id="category">
                <div className="cat-wrapper">
                    <div className="cat-wrapper-single">
                        <div className="cat-icon list">
                            <i className="fa fa-list" aria-hidden="true"></i>
                        </div>
                        <div className="cat-text">Product Category</div>
                    </div>
                    <div className="cat-wrapper-single">
                        <div className="cat-icon popular">
                            <i className="fa fa-fire" aria-hidden="true"></i>
                        </div>
                        <div className="cat-text">Popular Products</div>
                    </div>
                    <div className="cat-wrapper-single">
                        <div className="cat-icon recommend">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                        <div className="cat-text">Recommended Products</div>
                    </div>
                    <div className="cat-wrapper-single">
                        <div className="cat-icon shops">
                            <i className="fa fa-archive" aria-hidden="true"></i>
                        </div>
                        <div className="cat-text">Product Category</div>
                    </div>
                </div>
            </section>
            <section id="product-sec">
                <div className="container">
                    <div className="prod-wrap">
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/shoe2.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">{truncate('Free sample small Free sample small Free sample small', 30)}</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/bestshoe.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/shoe2.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/bestshoe.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/bestshoe.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/shoe2.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/bestshoe.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/shoe2.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                        <div className="prod-wrap-single">
                            <div className="prod-img">
                                <img src="/img/bestshoe.jpeg" alt="image" />
                            </div>
                            <div className="prod-details">
                                <div className="prod-details-name">Free sample small</div>
                                <div className="prod-details-price">#900 - #1,500</div>
                                <div className="prod-details-quantity">MOQ 4(pieces)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Buy
