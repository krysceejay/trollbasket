import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = () => {
    return (
        <div id="tabs">
            <ul className="nav-list">
                <li>
                    <Link to='/'>
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/buy' className="current">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Buy</span>
                    </Link>
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
    )
}

export default Tabs
