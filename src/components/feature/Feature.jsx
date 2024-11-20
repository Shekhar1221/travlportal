// import React from 'react'
// import { Col, Row } from 'antd';
import './feature.css'
// const style = { background: '#0092ff', padding: '8px 0' };
// const Feature = () => {
//   return (
//     <div className='featureContainer'>
//      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//       <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>
//          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//              <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>col11</Col>
//              <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>
//              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//                 <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={12}>col11</Col>
//              </Row>
//              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//                 <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={12}>col11</Col>
//              </Row>

//              </Col>
//          </Row>
//       </Col>
//       <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col xs={24} sm={12} md={8} lg={6} className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//     </Row>
//     </div>
//   )
// }

// export default Feature



import React from 'react';
import { Button, Card, Col, Flex, Row, Typography } from 'antd';
import FeatureCard from './FeatureCard';
const { Text } = Typography;

const cardStyle = {
  width: '270px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};
const imgStyle = {
  display: 'block',
  width: 50,
  height: 50
};
const Feature = () => (
  <div className='outerfeatureCont'>
    <div className='featureContainer'>
      <Row gutter={[16, 4]} justify={'center'}>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
          <FeatureCard logo={"./images/badge.png"} text={"BEST PRICE GUARANTEE"} desc={"Secure yourr flight from just $99"} color={"danger"} />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
          <FeatureCard logo={"./images/planer.png"} text={"TRAVEL UP TO 39% CHEAPER"} desc={"Book Flight + Hotel, Save up to 30%"} color={"success"} />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
          <FeatureCard logo={"./images/lock.png"} text={"SAFE BOOKING"} desc={"We protect youe personal data"} color={"#0097f5"} />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
          <Card
            className='featureCard'
            hoverable
            style={cardStyle}
            bordered={false}
            styles={{
              body: {
                padding: 0,
                overflow: 'hidden',
              },
            }}
          >
            <Flex justify='space-between' align='center'>
              <Flex
                vertical
                align="start"
                justify="center"
                style={{
                  paddingLeft: 8,
                }}
              >
                <Text style={{ textAlign: 'left', color: '#2590CE',marginBottom:'10px' }}>
                  Customer Rated Us
                </Text>
                <Text style={{ textAlign: 'left' }} type='secondary'>  5.0 <img src="./images/star_rating_5.png" alt="" />  67 Google Reviews</Text>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>

    </div>
  </div>
);
export default Feature;
