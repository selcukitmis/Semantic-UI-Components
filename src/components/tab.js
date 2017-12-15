import React from 'react'
import {Tab, Label, Menu} from 'semantic-ui-react'

const panes  = [
  {menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>},
  {menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
  {menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
];
const panes2 = [
  {menuItem: 'Tab 1', render: () => <Tab.Pane loading>Tab 1 Content</Tab.Pane>},
  {menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
  {menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
];
const panes3  = [
  {
    menuItem: {key: 'users', icon: 'users', content: 'Users'},
    render  : () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>,
    render  : () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
  },
];

const TabExampleBasic = () => (
  <div>
    <div>
      <Tab panes={panes}/>
    </div>
    <br/><br/>
    <Tab panes={panes} renderActiveOnly={true}/>
    <br/><br/>
    <Tab menu={{pointing: true}} panes={panes}/>
    <br/><br/>
    <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
    <br/><br/>
    <Tab menu={{secondary: true}} panes={panes}/>
    <br/><br/>
    <Tab menu={{text: true}} panes={panes}/>
    <br/><br/>
    <Tab panes={panes2}/>
    <br/><br/>
    <Tab menu={{attached: 'bottom', tabular: false}} panes={panes}/>
    <br/><br/>
    <Tab menu={{attached: false}} panes={panes}/>
    <br/><br/>
    <Tab menu={{borderless: true, attached: false, tabular: false}} panes={panes}/>
    <br/><br/>
    <Tab
      menu={{color: "pink", attached: true, tabular: false}}
      panes={panes}
    />
    <br/><br/>
    <Tab
      menu={{color: "gray", inverted: true, attached: false, tabular: false}}
      panes={panes}
    />
    <br/><br/>
    <Tab menu={{fluid: true, vertical: true, tabular: 'right'}} panes={panes}/>
    <br/><br/>
    <Tab panes={panes3}/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
  </div>
);

export default TabExampleBasic