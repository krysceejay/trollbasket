import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <main id="success-page">
        <div className="icon-wrapper">
            <div className="success-icon-wrap">
                <div className="success-icon">
                    <i className="fa fa-check check-icon" aria-hidden="true"></i>
                </div>
            </div>
            <p className="check-msg">Checkout Successful</p>
            <p className="check-extramsg">Your checkout is now successful.</p>
        </div>
            
        <Link to="/" className="btn btn-gotit gotit">Got It</Link>
        </main>
    )
}

export default Success
