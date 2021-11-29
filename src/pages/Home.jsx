import React from 'react'

import Banner from '../components/Banner'
import Introduction from '../components/Introduction'
import BestProduct from '../components/BestProduct'
import ListProducts from '../components/ListProducts'
import Brand from '../components/Brand'
import Issue from '../components/Issue'
import Video from '../components/Video'

const Home = () => {
    
    return (
        <div>
            {/* banner  */}
            <Banner/>

            {/* introduction */}
            <Introduction/>

            {/* best product  */}
            <BestProduct/>

            {/* product*/}
            <ListProducts/>

            {/* Brand*/}
            <Brand/>        

            {/* issue */}
            <Issue/>

            {/* video section */}
            <Video/>

            
        </div>
    )
}

export default Home
