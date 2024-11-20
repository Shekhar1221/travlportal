import React from 'react'
import './cheapflight.css'
import { Col, Dropdown, Flex, Row, Space } from 'antd'
import CheapFlightCard from '../cheapflightscard/CheapFlightCard'
import { DownOutlined } from '@ant-design/icons'

const items = [
  {
    label: <div className='dropdownflagItem'>England</div>,
    key: '0',
  },
  {
    label: <div className='dropdownflagItem'>England</div>,
    key: '1',
  }]


const CheapFlight = () => {
  return (
    <div className='cheapFlightMain'>
      <h4 className='headingcheapflight'> Cheap flights middle east</h4>
      <div className='cheapFlightSubHeadCont'>
         <span className='subheadingcheapflight'> We have more than 10 Years experience providing cheap flights to middle east</span>
      </div>
      <Row gutter={[16,4]}>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
          <CheapFlightCard />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
         <CheapFlightCard />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
         <CheapFlightCard />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
         <CheapFlightCard />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
         <CheapFlightCard />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
         <CheapFlightCard />
      </Col>
       </Row>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
          <div className='seeoffer'>View All Flight Offers</div>
            <DownOutlined className='iconoutlined'/>
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default CheapFlight
