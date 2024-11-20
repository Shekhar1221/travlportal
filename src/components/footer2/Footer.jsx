import React from 'react'

import './footer.css'
import { Link } from 'react-router-dom'
import { Col, Flex, Row, Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

const prefix = (
    <div className='footericonmail'>
        <span style={{fontSize:'12px'}} class="material-symbols-outlined">
           mail
        </span>
    </div>
);

const style = { background: '#0092ff', padding: '8px 0' };
const Footer = () => {
    return (
        <div className='footerCont'>
            <div className='footerlogoimgcont'><img className='footergloballogo' src="./images/logo.png" alt="" /></div>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                <Col style={{ textAlign: 'left' }} className="gutter-row" xs={24} sm={12} md={8} lg={6} span={6}>
                    <p className='footerh5'> Flights I  Hotel  I  Holidays </p>
                    <p className='copyrightcont  anchorFooter'>&copy; <span className=' copyrightspanbold'>2024 Global Travels</span> All rights reserved </p>
                    <p className='footercolor travelfooterdesc'> <span className='copyrightheading'>2024 Global Travels</span> isa travel agent
                        company based in United kingdom, Offers
                        wide broad of competitive ,affordable, efficient
                        and logistical Holidays, Flights, Hotels and Car
                        hire around the world</p>
                    <div className='mb-3'>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>price promise</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>check flight info</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Booking Cycle</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Portal Terms of Use</a></li>
                    </div>
                </Col>
                <Col style={{ textAlign: 'left' }} className="gutter-row" xs={24} sm={12} md={8} lg={5} span={6}>
                    <p className='footerboldpara'><span className='footerboldp'>Need to know more</span> </p>
                    <div className='d-flexflex-column justify-content-between'>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>price promise</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>check flight info</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Booking Cycle</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Portal Terms of Use</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>price promise</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>check flight info</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Booking Cycle</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Portal Terms of Use</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>price promise</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>check flight info</a></li>
                        <li className='footerList'><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Booking Cycle</a></li>
                    </div>
                </Col>
                <Col style={{ textAlign: 'left' }} className="gutter-row" xs={24} sm={12} md={8} lg={6} span={6}>
                    <p className='footerboldpara'><span className='footerboldp'>Need to know more</span> </p>
                    <Flex className='mb10'>
                        <div className='footericon'>
                            <span className="material-symbols-outlined searchlocation">location_on</span>
                        </div>
                        <div>
                            <div className='footergtltd'> Global Travel Direct LTD</div>
                            <div className='fs12 footercolor'> 32Chertsey Street, Guildford, GU1 4HD</div>
                        </div>
                    </Flex>
                    <Flex className='mb10'>
                        <div className='footericon'>
                            <span  class="material-symbols-outlined  fsi">call</span>
                        </div>
                        <span className='footernmbr'>02086255000</span>
                    </Flex>
                    <Flex className='mb5'>
                        <div className='footericon'>
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                        </div>
                        <a className='underlinelink' href="">support@globaltravels.co.uk</a>
                    </Flex>
                    <Flex className='mb5'>
                      <div className='footericon'>
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                      </div>
                        <a className='underlinelink' href="">booking@globaltravels.co.uk</a>
                    </Flex>
                    <div className='footercolor subscribetext mb8'> subscribe for a member saving</div>
                    <Search
                        style={{ width: '95%' }}
                        className='mb8'
                        placeholder="Enter youe email address"
                        enterButton="Send"
                        size="medium"
                        prefix={prefix}
                        classNames='customsearch'
                    />
                    <div className='footercolor subscribetext'> Your privacy secured & Respected</div>
                </Col>
                <Col style={{ textAlign: 'left' }} className="gutter-row" xs={24} sm={12} md={8} lg={7} span={6}>
                    <p className='footerboldpara'><span className='footerboldp'>Real Google Reviews by Real Customers</span> </p>
                    <Flex className='mb14'>
                        {/* <div className='footericon'>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div> */}
                        <div className='footerreview'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </Flex>
                    <Flex className='mb14'>
                        {/* <div className='footericon'>
                            
                        </div> */}
                        <div className='footerreview'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </Flex>
                    <Flex>
                        {/* <div className='footericon'>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div> */}
                        <div className='footerreview'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </Flex>
                </Col>
            </Row>

        </div>
    )
}

export default Footer
