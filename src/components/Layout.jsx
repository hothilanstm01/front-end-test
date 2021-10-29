import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'



const Layout = () => {
    return (
        <BrowserRouter>
            <Route>
            <div>
                <Header/>
                <div className="container">
                    <div className="main">
                        <Routes/>
                    </div>
                </div>
                <Footer/>
            </div>
            </Route>
            
        </BrowserRouter>
    )
}

export default Layout

