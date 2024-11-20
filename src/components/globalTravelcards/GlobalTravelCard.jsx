import React from 'react'
import './globaltravelcard.css'
import { Card } from 'antd'
const GlobalTravelCard = (props) => {
    return (
        // <div>
        //     <div className="card  cardChangeTravel text-center pb-4 mb5" style={{width: "16rem"}}>

        //         <div className="card-body travelCadBody">
        //            <div className='travellogo'>
        //            </div>
        //              <i className="fa fa-thin fa-plane travelPlaneIcon"></i>
        //             <h5 className="card-title fs-4 traveltitle">{props.title}</h5>
        //             <h6 className="card-subtitle mb-2  travelsubtitle">{props.subtitle}</h6>
        //             <p className="card-text fs12">{props.description}</p>
        //         </div>
        //     </div>
        // </div>

        <Card className='whyGlobalTravelCard'
            style={{
                borderRadius: '0px 0px 20px 20px',
                boxShadow: "1px 1px 2px 1px rgb(230, 226, 226)",
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '0px',
                marginTop: '100px'
            }}
        >
            <div className='travellogo'>
              <i className="fa fa-thin fa-plane travelPlaneIcon"></i>
              <p className="card-title traveltitle">Title</p>
            <p className="card-subtitle  travelsubtitle">Big Choice, Big saving</p>
            </div>
            <p className="card-text whyglobalcarddesc">This is the description of card This is the description of card</p>
        </Card>

    )
}

export default GlobalTravelCard
