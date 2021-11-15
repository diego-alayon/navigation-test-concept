
import './App.css';
import { ProSidebar, SidebarFooter, SidebarContent, SubMenu, MenuItem, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { useState } from 'react'
import DataNavigation from './bbdd/data-navigation.json'
import {
  UilAngleDoubleLeft,
  UilBrowser,
  UilDashboard,
  UilDesktopAlt,
  UilFocusTarget,
  UilCreditCardSearch,
  UilChart,
  UilCog,
  UilMegaphone,
  UilNewspaper,
  UilPlusCircle
 } from '@iconscout/react-unicons';
 import './custom.scss'


const App = ({collapsed}) => {

  const [toggle, setToggle] = useState(collapsed)

  return (
    <>
      <ProSidebar collapsed={toggle ? true : false} className="pro-sidebar-custom">
      <div>
        { DataNavigation.map(post => {
          return(
            <>
              <div key={post.subitems}>
                <div>{ post.subitems }</div>
                {console.log(post.subitems)}
              </div>
            </>
          )
        })}
      </div>
        <SidebarContent>
        <Menu iconShape="square">
        <MenuItem icon={<UilAngleDoubleLeft onClick={() => setToggle(!toggle)} />}>Lansweeper</MenuItem>
        <SubMenu icon={<UilBrowser />} title="Sites">
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
          <MenuItem>Doublegapac-1</MenuItem>
        </SubMenu>
        
        <SubMenu icon={<UilDashboard />} title="Boards">
          <MenuItem>Overview</MenuItem>
          <MenuItem>
            <div className="target-link">
              <div className="mr-2">Create new board</div>
              <UilPlusCircle />
            </div>
          </MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </SubMenu>

        <SubMenu icon={<UilFocusTarget />} title="Scaning">
          <MenuItem>All scan servers</MenuItem>
          <MenuItem>targets</MenuItem>
          <MenuItem>Credential vault</MenuItem>
          <MenuItem>Mapping</MenuItem>
          <MenuItem>Asset radar</MenuItem>
          <MenuItem>Exclusions</MenuItem>
          <MenuItem>Scan issues</MenuItem>
        </SubMenu>

        <SubMenu icon={<UilDesktopAlt />} title="Inventory">
          <MenuItem>All assets</MenuItem>
          <MenuItem>Assets groups</MenuItem>
          <MenuItem>Assets States</MenuItem>
          <MenuItem>Assets types</MenuItem>
          <MenuItem>Domains & Workgroups</MenuItem>
          <MenuItem>Installations</MenuItem>
          <MenuItem>IP Locations</MenuItem>
          <MenuItem>Asset Radar</MenuItem>
          <MenuItem>Duplicate conflicts</MenuItem>
          <MenuItem>Add new asset</MenuItem>
        </SubMenu>

        <SubMenu icon={<UilCreditCardSearch />} title="Software">
          <MenuItem>Software</MenuItem>
        </SubMenu>

        <SubMenu icon={<UilChart />} title="Reports">
          <MenuItem>All reports</MenuItem>
          <MenuItem>Hardware</MenuItem>
          <MenuItem>Security</MenuItem>
          <MenuItem>Software</MenuItem>
          <MenuItem>Users</MenuItem>
          <MenuItem>Custom reports</MenuItem>
          <MenuItem>Create new report</MenuItem>
        </SubMenu>

        <SubMenu icon={<UilCog />} title="Configuration">
          <MenuItem>Branding</MenuItem>
          <MenuItem>Installations</MenuItem>
          <MenuItem>Account management</MenuItem>
          <MenuItem>Asset management</MenuItem>
          <MenuItem>Aplications</MenuItem>
          <MenuItem>Server settings</MenuItem>
        </SubMenu>

      </Menu>
        </SidebarContent>

        <SidebarFooter>
          <Menu>
            <MenuItem icon={<UilMegaphone />}>What's new</MenuItem>
            <MenuItem icon={<UilNewspaper />}>Notifications</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
}

export default App;
