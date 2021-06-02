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
                <li className="current">
                    <Link to='/buy' className="current">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Buy</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <span>Deals</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                        <span>Wallet</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>More</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Tabs
