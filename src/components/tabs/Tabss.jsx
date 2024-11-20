import React from 'react';
import './tabs.css'
import SearchSection from '../searchsection/SearchSection';

import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: <div className='tabic1' style={{ backgroundColor: '#03CCED', borderRadius: "10px", padding: '12px', color: 'white' }}>
      <i className="fa fa-thin fa-plane tabsplan"></i>
      <p>Flight Only</p>
    </div>
    ,
    children: <SearchSection />,
  },
  {
    key: '2',
    label: <div style={{ backgroundColor: '#03CCED', borderRadius: "10px", padding: '12px', color: 'white' }}>
      <span class="material-symbols-outlined tabsplan">apartment</span>
      <p>Hotel Only</p>
    </div>,
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: <div style={{ backgroundColor: '#03CCED', borderRadius: "10px", padding: '12px', color: 'white' }}>
      <span class="material-symbols-outlined tabsplan">luggage</span>
      <p>Holiday package</p>
    </div>,
    children: 'Content of Tab Pane 3',
  },
];
const Tabss = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Tabss;