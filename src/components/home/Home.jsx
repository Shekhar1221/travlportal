import React from 'react'
import Banner from '../banner/Banner'
import Feature from '../feature/Feature'
import AffordableHotelDeals from '../affordablehoteldeals/AffordableHotelDeals'
import CheapFlight from '../cheapFlightMidEast/CheapFlight'
import GlobalTravels from '../globalTravels/GlobalTravels'
import LogoPayment from '../logopaymentoffer/LogoPayment'
// import Footer from '../footer/Footer'
import Footer from '../footer2/Footer'
import Bottom from '../bottom/Bottom'
import SearchSection from '../searchsection/SearchSection'
// import Tabs from '../tabs/Tabss'
import Tabss from '../tabs/Tabss'

const Home = () => {
  return (
    <div>
       <div className='picfeaturegrandParent'>
         <div className='picFeatureParent'>
            <Banner />
            <Tabss />
            <Feature className="featureposition"/>
         </div>
       </div>
       <CheapFlight />
       <AffordableHotelDeals />
       <GlobalTravels />
       <LogoPayment />
       <Footer />
       <Bottom />

    </div>
  )
}

export default Home
