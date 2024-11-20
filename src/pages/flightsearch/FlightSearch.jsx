import React from 'react'
import './flightsearch.css'
import FlightModifySearch from '../../components/flightsearch/flightmodifysearch/FlightModifySearch'
import Classcard from '../../components/flightsearch/flightsearchclasscard/Classcard'

const FlightSearch = () => {
    return (
        <div>
            <FlightModifySearch />
            <Classcard />
        </div>
    )
}

export default FlightSearch
