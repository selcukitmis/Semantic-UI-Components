import React from 'react'
import {Header, Segment, Icon} from 'semantic-ui-react'

const HeaderExamplePage = () => (
  <div>
    <Header as='h2' icon>
      <Icon name='settings'/>
      Account Settings
      <Header.Subheader>
        Manage your account settings and set e-mail preferences.
      </Header.Subheader>
    </Header>
    <Header as='h2' icon='plug' content='Uptime Guarantee'/>
    <Header as='h3' block>
      Block Header
    </Header>
    <div>
      <Header as='h2' attached='top'>
        Attached Header
      </Header>
      <Segment attached>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Segment>
    </div>
    <div>
      <Header as='h1'>First Header</Header>
      <Header as='h2'>Second Header</Header>
      <Header as='h3'>Third Header</Header>
      <Header as='h4'>Fourth Header</Header>
      <Header as='h5'>Fifth Header</Header>
      <Header as='h6'>Sixth Header</Header>
    </div>
    <div>
      <Header size='huge'>Huge Header</Header>
      <Header size='large'>Large Header</Header>
      <Header size='medium'>Medium Header</Header>
      <Header size='small'>Small Header</Header>
      <Header size='tiny'>Tiny Header</Header>
    </div>
    <div>
      <Header as='h4' color='red'>Red</Header>
      <Header as='h4' color='orange'>Orange</Header>
      <Header as='h4' color='yellow'>Yellow</Header>
      <Header as='h4' color='olive'>Olive</Header>
      <Header as='h4' color='green'>Green</Header>
      <Header as='h4' color='teal'>Teal</Header>
      <Header as='h4' color='blue'>Blue</Header>
      <Header as='h4' color='purple'>Purple</Header>
      <Header as='h4' color='violet'>Violet</Header>
      <Header as='h4' color='pink'>Pink</Header>
      <Header as='h4' color='brown'>Brown</Header>
      <Header as='h4' color='grey'>Grey</Header>
    </div>
    <Segment clearing>
      <Header as='h2' floated='right'>
        Float Right
      </Header>
      <Header as='h2' floated='left'>
        Float Left
      </Header>
    </Segment>
  </div>
)

export default HeaderExamplePage