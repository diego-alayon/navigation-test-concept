
import './App.css';
import { ProSidebar, SidebarFooter, SidebarContent, SubMenu, MenuItem, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { useState } from 'react'
// import DataNavigation from './bbdd/data-navigation.json'
import { Sites, Boards, Scaning, Inventory, Software, Reports, Configuration } from './bbdd/items-navigation'
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
      <div className="text-4xl text-blue-500">text hola</div>
        <SidebarContent>
        <Menu iconShape="square">
        <MenuItem icon={<UilAngleDoubleLeft onClick={() => setToggle(!toggle)} />}>Lansweeper</MenuItem>
        <SubMenu icon={<UilBrowser />} title="Sites">
          <MenuItem>
            {Sites.map(Sites => <MenuItem>{Sites}</MenuItem>)}
          </MenuItem>
        </SubMenu>
        
        <SubMenu icon={<UilDashboard />} title="Boards">
          <MenuItem>
            {Boards.map(Boards => <MenuItem>{Boards}</MenuItem>)}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UilFocusTarget />} title="Scaning">
          <MenuItem>
            {Scaning.map(Scaning => <MenuItem>{Scaning}</MenuItem>)}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UilDesktopAlt />} title="Inventory">
          <MenuItem>
            {Inventory.map(Inventory => <MenuItem>{Inventory}</MenuItem>)}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UilCreditCardSearch />} title="Software">
          <MenuItem>
            {Software.map(Software => <MenuItem>{Software}</MenuItem>)}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UilChart />} title="Reports">
          <MenuItem>
            {Reports.map(Reports => <MenuItem>{Reports}</MenuItem>)}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UilCog />} title="Configuration">
          <MenuItem>
            {Configuration.map(Configuration => <MenuItem>{Configuration}</MenuItem>)}
          </MenuItem>
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
