import React from 'react'
import './logopayment.css'
import { Flex } from 'antd'

const LogoPayment = () => {
  return (
    <div className='logoPaymentOfferCont'>
      <div className='mobileAppDownloadContainer fs-5  d-flex flex-wrap justify-content-around'>
        <div className='emptyWidth'>
          <div className='mobileImgcont'><img className='mobImg' src="./images/mobileImg.jpg" alt="" /></div>
        </div>
        <div className='saveHeadinglogopayment  d-flex flex-wrap text-center ms-5'> save up to 10% when you book with our friendly Mobile APP</div>
        <div className='text-center  me-4'>
          <img src="./images/applestore.png" className='me-2' alt="" />
          <img src="./images/applestore.png" alt="" />
        </div>
      </div>
      <Flex wrap justify='space-around' className='paymentcardlogocont'>
        <Flex wrap justify='center'>
          <Flex className='paylogopadd' vertical>
            <p className='paymentcardhead'>We accept most of major <br /> debit and credit cards</p>
            <div><img className='paymentcardimg' src="./images/payment_methd.jpg" alt="" /></div>
          </Flex>
          <Flex className='paylogopadd' vertical>
            <p className='paymentcardhead'>Your data and online  <br /> purchase protected</p>
            <div><img className='paymentcardimg' src="./images/payment_methd.jpg" alt="" /></div>
          </Flex>
        </Flex>
        <Flex wrap justify='center'>
          <Flex wrap justify='center'>
            <Flex className='paylogopadd' vertical>
              <p className='paymentcardhead'>We are ATOL protected</p>
              <div><img className='paymentcardsectionlogo' src="./images/travel2.png" alt="" /></div>
            </Flex>
            <Flex className='paylogopadd' vertical>
              <p className='paymentcardhead'>We are financially protected</p>
              <div><img className='paymentcardsectionlogo' src="./images/travel3.png" alt="" /></div>
            </Flex>
            <Flex className='paylogopadd' vertical>
              <p className='paymentcardhead'>We are ATOL protected</p>
              <div><img className='paymentcardsectionlogo' src="./images/travel4.png" alt="" /></div>
            </Flex>
          </Flex>
          <Flex justify='space-between'  vertical className='paylogopadd'>
            <p className='paymentcardhead'>Follow us on social media for more travel news</p>
            <Flex wrap justify='center'>
              <div><img className='paymentcardsectionlogo2' src="./images/social-icon-2.png" alt="" /></div>
              <div><img className='paymentcardsectionlogo2' src="./images/social-icon-4.png" alt="" /></div>
              <div><img className='paymentcardsectionlogo2' src="./images/social-icon-3.png" alt="" /></div>
              <div><img className='paymentcardsectionlogo2' src="./images/social-icon-1.png" alt="" /></div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default LogoPayment
