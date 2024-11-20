import React from 'react'
import './affordablehoteldeals.css'
import AffordableHotelCard from '../affordablehotelcard/AffordableHotelCard'
import { Flex, Dropdown, Space, Row, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    label: <div className='dropdownflagItem'>England</div>,
    key: '0',
  },
  {
    label: <div className='dropdownflagItem'>England</div>,
    key: '1',
  }]

const AffordableHotelDeals = () => {
  return (
    <div className='affordableHotelSection'>
      <div className='affhotelheadingscont'>
        <h4 className='headAfford'> Affordable Hotel Deals Around the World</h4>
        <div className='affordsubhead'>
          <span className='descAfford '> We have teamed up with the leading hotel providers from cheap to five start luxury hotels to meet our customers expectation</span>
        </div>
      </div>
      <div style={{padding:'20px'}}>
      <Row gutter={[16,8]} justify={'center'}>
      <Col className="gutter-row" xs={13} sm={12} md={8} lg={8} xl={6} xxl={4}>
          <AffordableHotelCard />
      </Col>
      <Col className="gutter-row" xs={13} sm={12} md={8} lg={8} xl={6} xxl={4}>
          <AffordableHotelCard />
      </Col>
      <Col className="gutter-row" xs={13} sm={12} md={8} lg={8} xl={6} xxl={4}>
          <AffordableHotelCard />
      </Col>
      <Col className="gutter-row" xs={13} sm={12} md={8} lg={8} xl={6} xxl={4}>
          <AffordableHotelCard />
      </Col>
      </Row>
      </div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
          <div className='seeoffer'>View All Hotel Offers</div>
            <DownOutlined className='iconoutlined' />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default AffordableHotelDeals
