
import React, { Component } from 'react';
import './topbar.css'

import LeftMenu from '../leftmenu/Leftmenu'
import RightMenu from '../rightmenu/Rightmenu'
import { Drawer, Button } from 'antd';
class Topbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <nav className="menuBar">
          <div className="logo">
            <a href="#"><img src="./images/logo.png" className='navLogo' alt="" /></a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
            </Drawer>
</div>
        </nav>
    );
  }
}
export default Topbar;