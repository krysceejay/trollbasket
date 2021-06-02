import React from 'react'
import Tabs from './Tabs'

const Layout = ({ children, showTabs = true }) => {
    return (
        <>
            {showTabs && <Tabs />}
            {children}
        </>
    )
}

export default Layout
