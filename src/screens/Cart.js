import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import {truncate} from '../utils/functions'

const Cart = () => {
    const history = useHistory()
    return (
        <Layout showTabs={false}>
            <main id="cart-sec">
                <div className="container">
                    <header>
                        <div className="header-icon" onClick={() => history.goBack() }>
                            <i className="fa fa-angle-left arrow-left" aria-hidden="true"></i>
                        </div>
                        <span className="container page-title">Carts</span>
                    </header>
                </div>
                <section id="cart-items">
                    <div className="container">
                        <div className="cart-item">
                            <div className="cart-top">
                                <div className="cart-img">
                                    <img src="/img/bestshoe.jpeg" alt="product"/>
                                </div>
                                <div className="cart-det">
                                    <p className="cart-name">2019 Vintage Coca Cola</p>
                                    <p className="cart-price">N18,099.09</p>
                                </div>
                            </div>
                            <div className="hr-line" />
                            <div className="cart-bottom">
                                <div className="cart-delete">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    <span className="del-text">Delete</span>
                                </div>
                                <div className="cart-buttons">
                                    <button>&#8722;</button>
                                    <span>24</span>
                                    <button>&#43;</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-top">
                                <div className="cart-img">
                                    <img src="/img/shoe2.jpeg" alt="product"/>
                                </div>
                                <div className="cart-det">
                                    <p className="cart-name">2019 Vintage Coca Cola</p>
                                    <p className="cart-price">N18,099.09</p>
                                </div>
                            </div>
                            <div className="hr-line" />
                            <div className="cart-bottom">
                                <div className="cart-delete">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    <span className="del-text">Delete</span>
                                </div>
                                <div className="cart-buttons">
                                    <button>&#8722;</button>
                                    <span>24</span>
                                    <button>&#43;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="cart-total">
                    <div className="container">
                        <div className="total">
                            <div className="total-text">Subtotal</div>
                            <div className="total-price">N18,099.09</div>
                        </div>
                        <div className="total">
                            <div className="total-text">Total</div>
                            <div className="total-price pt">N18,099.09</div>
                        </div>
                        <button className="btn btn-checkout">Checkout</button>
                    </div>
                </section>
                <section id="recent-views">
                    <div className="container">
                        <div className="heading">
                            <div className="title">Review and Ratings</div>
                            <div className="view-all">View all</div>
                        </div>
                        <div className="prod-wrap">
                            <Link to='/details/1234ads421egjdsc' className="prod-wrap-single">
                                <div className="prod-img">
                                    <img src="/img/shoe2.jpeg" alt="shoe" />
                                </div>
                                <div className="prod-details">
                                    <div className="prod-details-name">{truncate('Free sample small Free sample small Free sample small', 30)}</div>
                                    <div className="prod-details-price">#900 - #1,500</div>
                                    <div className="prod-details-quantity">MOQ 4(pieces)</div>
                                </div>
                            </Link>
                            <Link to='/details/1234ads421egjdsc' className="prod-wrap-single">
                                <div className="prod-img">
                                    <img src="/img/shoe2.jpeg" alt="shoe" />
                                </div>
                                <div className="prod-details">
                                    <div className="prod-details-name">{truncate('Free sample small Free sample small Free sample small', 30)}</div>
                                    <div className="prod-details-price">#900 - #1,500</div>
                                    <div className="prod-details-quantity">MOQ 4(pieces)</div>
                                </div>
                            </Link>
                            <Link to='/details/1234ads421egjdsc' className="prod-wrap-single">
                                <div className="prod-img">
                                    <img src="/img/shoe2.jpeg" alt="shoe" />
                                </div>
                                <div className="prod-details">
                                    <div className="prod-details-name">{truncate('Free sample small Free sample small Free sample small', 30)}</div>
                                    <div className="prod-details-price">#900 - #1,500</div>
                                    <div className="prod-details-quantity">MOQ 4(pieces)</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Cart
