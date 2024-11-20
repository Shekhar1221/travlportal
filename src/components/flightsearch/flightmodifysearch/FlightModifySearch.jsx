import React from 'react'
import './flightmodifysearch.css'
import { Col, Row,DatePicker, Flex } from 'antd'

const FlightModifySearch = () => {
    return (
        <div className='flightmodifyouter'>
            <div className='flsreturnsection'>
                <Row>
                    <Col className="gutter-row" span={6}>
                        <div style={{ backgroundColor: 'blue' }}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Row style={{marginBottom:'12px'}}>
                            <Col className="gutter-row" span={4}>
                                <div className='color1 fw3 fs16 pt12 pb12'>Return Flight</div>
                            </Col>
                            <Col className="flspriceandtime gutter-row  pt10" span={6}>
                                <div><span className='flspricespan1'>Fastest</span><span className='ml10 color1 fw3 fs16 pt12 pb12'>$127</span></div>
                                <div className='flsflightavgtime'>7h 10M (Average)</div>
                            </Col>
                            <Col className="flspriceandtime gutter-row  pt10" span={7}>
                                <div><span className='flspricespan1'>Best Choice</span><span className='ml10 color1 fw3 fs16 pt12 pb12'>$128</span></div>
                                <div className='flsflightavgtime'>10h 45M (Average)</div>
                            </Col>
                             <Col className="flspriceandtime gutter-row  pt10" span={7}>
                                <div><span className='flspricespan1'>Cheapest</span><span className='ml10 color1 fw3 fs16 pt12 pb12'>$107</span></div>
                                <div className='flsflightavgtime'>17h 10M (Average)</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="gutter-row flscityeco" span={7}>
                                <div className='flscity'>Dubai(DXB) - London(LHR)</div>
                                <Flex  align='center'> <span class="material-symbols-outlined empboxspan">
                                    check_box_outline_blank
                                </span> <span className='adultspan'>1 Adult</span>  <span class="material-symbols-outlined empboxspan">
                                        check_box_outline_blank
                                    </span>  <span className='adultspan'>1 Child </span> <span>Economy</span> </Flex>
                            </Col>
                            <Col className="gutter-row flscityeco" span={5}>
                                <div>Sun, 27 Sep 2019</div>
                            </Col>
                            <Col className="gutter-row flscityeco" span={12}>
                                <div className='datechangefls'>Change Date</div>
                                <div className='datecontfls'><span class="material-symbols-outlined empboxspan">
                                    check_box_outline_blank
                                     </span> <DatePicker />
                                     <span class="material-symbols-outlined empboxspan">
                                        check_box_outline_blank
                                     </span> <DatePicker />
                                     <span class="material-symbols-outlined empboxspan">
                                        check_box_outline_blank
                                     </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FlightModifySearch
