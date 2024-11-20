import React from 'react'
import './cheapflightcard.css'

import { Button, Card, Flex, Typography } from 'antd';
import { Color } from 'antd/es/color-picker';
const cardStyle = {
    marginBottom:20
};
const imgStyle = {
    width: '100%',
    display: 'block',
};

const flexThirdSectionStyle={
    backgroundColor:"#00c8f5",
    width:'18%',
    wrap:'wrap',
    padding:10,
    color:'white'
}

const CheapFlightCard = () => {
    return (
        <div>
            <Card 
                hoverable
                style={cardStyle}
                styles={{
                    body: {
                        padding: 0,
                        overflow: 'hidden',
                        borderRadius:'5px'
                    },
                }}
                className='cheapflightcard'
            >
                <Flex justify="space-between">
                    <Flex style={{width:'28%'}}>
                    <img
                        alt="avatar"
                        src="./images/aifeltower.jpg"
                        style={imgStyle}
                    />
                    </Flex>
                    <Flex
                        vertical
                        align="start"
                        justify="space-around"
                        style={{
                            // paddingLeft: 5,
                            width:'50%'
                        }}
                    >
                       <Flex className='cheapflightcardheadflex' justify='space-between' wrap>
                        <div className='cheapFlightCrdMidHead1'>Bahgdad Flights</div>
                        <div className='cheapFlightCrdMidHead2'>Return</div>
                        </Flex>
                       <div className='cheapfightcrdmidsec'>LON (London Baghdad) BGW</div>
                       <div className='cheapfightcrdlowersec'>Gain $20 discount on your next booking</div>
                    </Flex>
                    <Flex vertical justify='space-around' wrap style={flexThirdSectionStyle}>
                        <div className='cheapflightcardrightsectop'>Avg Per Person</div>
                        <div className='cheapflightcardrightsecmid'>$465.00</div>
                        <div className='cheapflightcardrightseclower'>Search Flights</div>
                    </Flex>
                </Flex>
            </Card>
        </div>
    )
}

export default CheapFlightCard
