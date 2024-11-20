import React, { Component } from 'react';
import './rightmenu.css'
import { Menu, Icon, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const items = [
    {
        label: <div className='dropdownflagItem'><img src='./images/engflag.jpg' className='flag'/>England</div>,
        key: '0',
    },
    {
        label: <div className='dropdownflagItem'><img src='./images/engflag.jpg' className='flag'/>England</div>,
        key: '1',
    },
    // {
    //     type: 'divider',
    // },
    {
        label: <div className='dropdownflagItem'><img src='./images/engflag.jpg' className='flag'/>England</div>,
        key: '2',
    },
];
class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                {/* <Menu.Item key="mail">
          <a href="">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item> */}
                <Menu.Item key={'country'}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                               <img src="./images/engflag.jpg" className='flag' alt="" />
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Menu.Item>

            </Menu>
        );
    }
}
export default RightMenu;