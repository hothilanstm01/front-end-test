import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Routes from './routes/Routes'




const App = () => {
    return (
        <BrowserRouter>
            <Route>
            <div>
                <Header/>
                <div className="main">
                    <Routes/>
                </div>
                <Footer/>
            </div>
            </Route>
            
        </BrowserRouter>
    )
}

export default App

