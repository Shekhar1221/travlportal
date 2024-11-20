import { Flex } from 'antd'
import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
      <Flex wrap justify='space-around' className='navCont'>
        <Flex wrap>
           <div  className='mr10'>About Us</div>
           <div className='mr10'>Contact Us</div>
           <div>02086255000</div>
        </Flex>
        <Flex wrap>
           <div className='mr8'>Account</div>
           <div className='mr8'>My List</div>
           <div className='mr8'>Manage trips</div>
           <div className='mr8'>Support</div>
           <div>Blog</div> 
        </Flex>
      </Flex>
    </div>
  )
}

export default Navbar
