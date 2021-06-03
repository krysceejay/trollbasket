import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Layout from '../components/Layout'


const Details = () => {
    const history = useHistory()
    return (
        <Layout showTabs={false}>
        <main id="details-sec">
            <div className="container">
                <header>
                    <div className="header-icon" onClick={() => history.goBack() }>
                        <i className="fa fa-angle-left arrow-left" aria-hidden="true"></i>
                    </div>
                    <span className="container page-title">Details</span>
                    <div className="icon-group">
                        <div className="header-icon2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <Link to="/cart" className="header-icon2 relative">
                            <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
                            <span className="cart-num">9</span>
                        </Link>
                    </div>
                </header>
            </div>
            <section id="img-sec">
                <div className="display-img">
                    <img src="/img/bestshoe.jpeg" alt="product"/>
                </div>
            </section>
            <section id="prod-desc">
                <div className="container">
                    <p className="name">NIKE Huararche 2019</p>
                    <p className="description">Get comfy and comfortable with the new 2019 designer
                        sneaker for all your events </p>
                    <p className="price">N45,000 - N80,000 <span className="per-piece">/Piece</span></p>    
                </div>
                <div className="prod-desc-drop-wrap">
                    <div className="container">
                        <div className="prod-desc-drop">
                            <div className="prod-desc-title">Product Description</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section id="review">
                <div className="container">
                    <div className="heading">
                        <div className="title">Review and Ratings</div>
                        <div className="view-all">View all</div>
                    </div>
                    <div className="star-rating">
                        <i className="fa fa-star fill" aria-hidden="true"></i>
                        <i className="fa fa-star fill" aria-hidden="true"></i>
                        <i className="fa fa-star fill" aria-hidden="true"></i>
                        <i className="fa fa-star nofill" aria-hidden="true"></i>
                        <i className="fa fa-star nofill" aria-hidden="true"></i>
                        <span className="rate-num">3.0</span>
                    </div>
                    <p className="comment">This is the best product I have used in a long while and the
                    size fits perfectly and I love the colors!!!!!</p>
                    <div className="comment-person">
                        <div className="comment-img">
                            <img src="/img/smile-man.png" alt="comment" /> 
                        </div>
                        <span className="comment-name">Segun Arinze</span>
                    </div>
                </div>
            </section>
            <section id="action-btn">
                <div className="action-wrap">
                    <button className="btn btn-cart">Add to cart</button>
                    <button className="btn btn-wish">Wishlist</button>
                </div>
            </section>
        </main>
        </Layout>
    )
}

export default Details
