import { Card, Flex,Typography } from 'antd'
import React from 'react'
const { Text } = Typography;


const cardStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  };
  const imgStyle = {
    display: 'block',
    width:50,
    height:50
  };
const FeatureCard = (props) => {
  return (
    <Card
    className='featureCard'
  hoverable
  bordered={false}
  style={cardStyle}
  styles={{
    body: {
      padding: 0,
      overflow: 'hidden',
    },
  }}
>
  <Flex  justify='space-between' align='center'>
    <img
      alt="avatar"
      src={props?.logo}
      style={imgStyle}
    />
    <Flex
      vertical
      align="start"
      justify="center"
      style={{
        paddingLeft:8,
      }}
    >
      <Text style={{textAlign:'left',color:props.color}} type={props.color}>
       <b>{props.text}</b>
      </Text>
      <Text  style={{textAlign:'left'}} type='secondary'>{props.desc}</Text>
    </Flex>
  </Flex>
    </Card>
  )
}

export default FeatureCard
