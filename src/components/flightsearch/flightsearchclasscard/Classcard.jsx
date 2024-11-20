import React from 'react'
import './classcard.css'
import { Button, Card } from 'antd'

const Classcard = () => {
    return (
        <div style={{ marginTop: '40px', marginLeft: '40px' }}>
            <Card
                style={{
                    width: 300,
                    textAlign:'start',
                    borderBottom:"2px solid #00c8f5"
                }}
                bodyStyle={
                    {
                        padding:0
                    }
                }
            >
                <p className='classcardtitle'>Economy Class</p>
                <div className='classcardbody'>
                <div className='classcardbodysection'>
                    <h5 className='mb5'>Baggage</h5>
                    <p className='fs12'>Carry-on Baggage <span>1*8 kg</span></p>
                    <p className='fs12'>Checked Baggage : Not included</p>
                </div>
                <div className='classcardbodysection'>
                    <h5 className='mb5'>Fare Rules</h5>
                    <p className='fs12'>Non-refundable <span>1*8 kg</span></p>
                    <p className='fs12'>Changes not permitted</p>
                    <p className='fs12'>Ticketing : Within 12 hours after payment</p>

                </div>
                <div className='classcarddoller'>
                    <p><span className='classcardbodyh3'>US$340</span><span className='roundtroptext'>Round Trip</span></p>
                </div>
                <div className='clascardbtncont'>
                <Button className='classcardbtn' type="text">Text Button</Button>
                </div>
                </div>
            </Card>
        </div>
    )
}

export default Classcard
