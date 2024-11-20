import React from 'react'

import './globaltravel.css'
import GlobalTravelCard from '../globalTravelcards/GlobalTravelCard'
import { Card, Col, Flex, Row } from 'antd'
const GlobalTravels = () => {
  return (


   //  <div style={{padding:'20px'}}>
   //   <Row gutter={[16,8]}>
   //    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
   //       <GlobalTravelCard  />
   //    </Col>
   //    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
   //       <GlobalTravelCard  />
   //    </Col>
   //    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
   //       <GlobalTravelCard  />
   //    </Col>
   //    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
   //       <GlobalTravelCard  />
   //    </Col>
   //    </Row>
   //  </div>

   <div className='whyglobalSection'>
      <div className='globalheadingscont'>
        <h4 className='headglobal'> Why Global travels</h4>
        <div className='globalsubhead'>
          <span className='descglobal '> We have teamed up with the most experienced holiday provider to meet our customers expectation</span>
        </div>
      </div>
      <div style={{padding:'20px'}}>
     <Row gutter={[16,8]}>
      <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
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
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
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
            <span class="material-symbols-outlined travelPlaneIcon">apartment</span>
              {/* <i className="fa fa-thin fa-plane travelPlaneIcon"></i> */}
              <p className="card-title traveltitle">Hotels</p>
            <p className="card-subtitle  travelsubtitle"> Over 230.000 Hotels</p>
            </div>
            <p className="card-text whyglobalcarddesc">We offer a wide range of Business Hotels, Family Hotels, Honeymoon Hotels, Sport Hotels at low rates</p>
        </Card>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
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
            <span class="material-symbols-outlined travelPlaneIcon">domain_add</span>
              {/* <img  className='travelPlaneIcon' src="./images/why2.png" alt="" /> */}
              {/* <i className="fa fa-thin fa-plane travelPlaneIcon"></i> */}
              <p className="card-title traveltitle">Flight + Hotel</p>
            <p className="card-subtitle  travelsubtitle"> Book together & save</p>
            </div>
            <p className="card-text whyglobalcarddesc"> Book flight plus hotel togetherwe offer you up to 30% discount on selected products for your next booking</p>
        </Card>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
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
            <span class="material-symbols-outlined travelPlaneIcon">luggage</span>
              {/* <i className="fa fa-thin fa-plane travelPlaneIcon"></i> */}
              <p className="card-title traveltitle">Packages</p>
            <p className="card-subtitle  travelsubtitle"> Buy Together To Save More</p>
            </div>
            <p className="card-text whyglobalcarddesc"> Book two or more services from us to 
            save up to 10% on your total basket</p>
        </Card>
      </Col>
      </Row>
    </div>
    </div>
  )
}

export default GlobalTravels
