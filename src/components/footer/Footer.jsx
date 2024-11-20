import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Flex } from 'antd'
const Footer = () => {
    return (
        <div className='footerCont'>
            <div className='footerlogoimgcont'><img className='footergloballogo' src="./images/logo.png" alt="" /></div>
            <Flex wrap justify='space-around' className='row'>
                <div className='d-flex flex-column col-md-3 mb-2'>
                    <h5 className='footerh5 mb-3'> Flights I  Hotel  I  Holidays</h5>
                    <div className='fs12 mb-3'>&copy; <span className='copyrightheading'>2024 Global Travels</span> All rights reserved </div>
                    <div className='footercolor travelfooterdesc d-flex flex-wrap mb-3'> <span className='copyrightheading'>2024 Global Travels</span> isa travel agent
                        company based in United kingdom, Offers
                        wide broad of competitive ,affordable, efficient
                        and logistical Holidays, Flights, Hotels and Car
                        hire around the world</div>
                    <div className='mb-3'>
                        <li><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>price promise</a></li>
                        <li><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>check flight info</a></li>
                        <li><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Booking Cycle</a></li>
                        <li><span className='greaterthanspan'> &gt;</span> <a href="" className='anchorFooter'>Portal Terms of Use</a></li>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between col-md-2 mb-2'>
                    <h6><span className='copyrightheading'>Need to know more</span> </h6>
                    <div className='d-flexflex-column justify-content-between'>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>price promise</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>check flight info</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>Booking Cycle</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>Portal Terms of Use</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>price promise</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>check flight info</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>Booking Cycle</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>Portal Terms of Use</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>price promise</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>check flight info</Link></li>
                        <li><span className='greaterthanspan'> &gt;</span> <Link to="" className='anchorFooter'>Booking Cycle</Link></li>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <h5 className='mb-3'><span className='copyrightheading'>Stay in Touch</span> </h5>
                    <div className='d-flex mb-3'>
                        <div>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div>
                        <div>
                            <div className='fs12 text-primary fw-semibold'> Global Travel Direct LTD</div>
                            <div className='fs12 footercolor'> 32Chertsey Street, Guildford, GU1 4HD</div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        <span className='footernmbr'>02086255000</span>
                    </div>
                    <div className='mb-2'>
                        <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        <a className='text-primary text-decoration-underline' href="">support@globaltravels.co.uk</a>
                    </div>
                    <div className='mb-2'>
                        <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        <a className='text-primary text-decoration-underline' href="">support@globaltravels.co.uk</a>
                    </div>
                    <div className='footercolor fs12 text-center mb-1'> subscribe for a member saving</div>
                    <div>
                        <div class="input-group mb-1">
                            <input type="text" className="form-control footercolor fs12" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button class="input-group-text footeremailbtn" id="basic-addon2">SEND</button>
                        </div>
                    </div>
                    <div className='footercolor fs12 text-center'> Your privacy secured & Respected</div>
                </div>
                <div className='col-md-3 mb-2'>
                    <h5 className='mb-2'><span className='copyrightheading'>Real Google Reviews by Real Customers</span> </h5>
                    <div className='d-flex mb-3'>
                        <div>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div>
                        <div className='footerreview d-flex flex-wrap'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </div>
                    <div className='d-flex mb-3'>
                        <div>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div>
                        <div className='footerreview d-flex flex-wrap'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <i className="fa fa-solid fa-phone fs-3 me-2 "></i>
                        </div>
                        <div className='footerreview d-flex flex-wrap'>
                            we give five star to Global Travels customer
                            service, Professionaladvice, quick response,
                            friendly and chatty <a className='text-primary' href="">Read more</a>
                        </div>
                    </div>

                </div>
            </Flex>
            
        </div>
    )
}

export default Footer
