import React, { Component } from 'react';
import { Menu, Icon ,Typography} from 'antd';
const {Text} = Typography
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="home">
          <a href="">HOME</a>
        </Menu.Item>
        <Menu.Item key="flights">
          <a href="">FLIGHTS</a>
        </Menu.Item>
        <Menu.Item key="hotels">
          <a href="">HOTELS</a>
        </Menu.Item>
        <Menu.Item key="holidays">
          <a href=""><Text type='secondary'>HOLIDAY PACKAGES</Text></a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;