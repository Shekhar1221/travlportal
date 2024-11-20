import React from 'react'
import './affordablehotelcard.css'
import { Card,Flex } from 'antd';
const { Meta } = Card;
const AffordableHotelCard = () => {
    return (
        <Card className='affordCard'
            hoverable
            style={{
                // width: 250,
                borderBottom:`2px solid #00c8f5` 
            }}
            cover={<img alt="example" style={{height:'210px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta className='affordCardTitle' title="Rotana Hotel"/>
                   <p className="starcard4"><img src="./images/star_rating_4.png" alt="" /></p>
                    <Flex justify='space-between'><div className='datespan'>07, Mar - 17, Mar</div><span className='mrgnstrtmightspan'>10 Nights</span></Flex>
                    <div className='cardpp'>FROM 478 PP</div>
                    <div className=''><span className='cardRating'>8.0 out of 10</span></div>
                    <div className='cardcity'>Greece</div>
                    <div className='hotelcardsave'>Save up <div>to 950</div></div>
            </Card>
    )
}

export default AffordableHotelCard
