import React from 'react'
import {Button, Popup, Input, Header, Grid, Image, Icon} from 'semantic-ui-react'

const users        = [
  {
    name  : 'Elliot Fu',
    bio   : 'Elliot has been a member since July 2012',
    avatar: '/assets/images/avatar/small/elliot.jpg',
  },
  {
    name  : 'Stevie Feliciano',
    bio   : 'Stevie has been a member since August 2013',
    avatar: '/assets/images/avatar/small/stevie.jpg',
  },
  {
    name  : 'Matt',
    bio   : 'Matt has been a member since July 2014',
    avatar: '/assets/images/avatar/small/matt.jpg',
  },
];
const style        = {
  borderRadius: 0,
  opacity     : 0.7,
  padding     : '2em',
};
const PopupExample = () => (
  <div>
    <div>
      <Popup
        trigger={<Button icon='add'/>}
        content='Add users to your feed'
      />
    </div>
    <br/>
    <div>
      {users.map(user => (
        <Popup
          key={user.name}
          trigger={<Image src={user.avatar} avatar/>}
          header={user.name}
          content={user.bio}
        />
      ))}
    </div>
    <br/>
    <br/>
    <div>
      <Popup trigger={<Icon circular name='heart'/>}>
        Hello. This is a regular pop-up which does not allow for lots
        of content. You cannot fit a lot of words here as the
        paragraphs will be pretty narrow.
      </Popup>
      <Popup
        trigger={<Icon circular name='heart'/>}
        wide
      >
        Hello. This is a wide pop-up which allows for lots of content
        with additional space. You can fit a lot of words here and the
        paragraphs will be pretty wide.
      </Popup>
      <Popup
        trigger={<Icon circular name='heart'/>}
        wide='very'
      >
        Hello. This is a very wide pop-up which allows for lots of
        content with additional space. You can fit a lot of words
        here and the paragraphs will be pretty wide.
      </Popup>
    </div>
    <br/>
    <br/>
    <div>
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is a mini popup'
        size='mini'
      />
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is a tiny popup'
        size='tiny'
      />
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is a small popup'
        size='small'
      />
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is a large popup'
        size='large'
      />
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is a huge popup'
        size='huge'
      />
    </div>
    <br/>
    <br/>
    <Popup
      trigger={<Button>Show flowing popup</Button>}
      flowing
      hoverable
    >
      <Grid centered divided columns={3}>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Basic Plan</Header>
          <p><b>2</b> projects, $10 a month</p>
          <Button>Choose</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Business Plan</Header>
          <p><b>5</b> projects, $20 a month</p>
          <Button>Choose</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Premium Plan</Header>
          <p><b>8</b> projects, $25 a month</p>
          <Button>Choose</Button>
        </Grid.Column>
      </Grid>
    </Popup>
    <br/>
    <br/>
    <div>
      <Popup
        trigger={<Button icon='add'/>}
        content='Hello. This is an inverted popup'
        inverted
      />
      <Popup
        trigger={<Icon circular name='heart'/>}
        content='Hello. This is an inverted popup'
        inverted
      />
    </div>
    <br/>
    <br/>
    <Grid columns={3} style={{width: '600px'}}>
      <Grid.Row>
        <Grid.Column>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the top left'
            position='top left'
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the top center'
            position='top center'
          />
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the top right'
            position='top right'
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column floated='left'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the left center'
            position='left center'
          />
        </Grid.Column>
        <Grid.Column floated='right' textAlign='right'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the right center'
            position='right center'
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the bottom left'
            position='bottom left'
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the bottom center'
            position='bottom center'
          />
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Popup
            trigger={<Icon name='heart' color='red' size='large' circular/>}
            content='I am positioned to the bottom right'
            position='bottom right'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br/>
    <br/>
    <div>
      <Popup
        trigger={<Icon size='large' name='heart' circular/>}
        content='Way off to the left'
        offset={50}
        position='left center'
      />
      <Popup
        trigger={<Icon size='large' name='heart' circular/>}
        content='As expected this popup is way off to the right'
        offset={50}
        position='right center'
      />
    </div>
    <br/>
    <br/>
    <Popup
      trigger={<Button icon='eye'/>}
      content='Popup with a custom style prop'
      style={style}
      inverted
    />
    <br/>
    <br/>
    <div>
      <Popup
        trigger={<Button icon>Click me</Button>}
        content='Hide the popup on any scroll event'
        on='click'
        hideOnScroll
      />
      <Popup
        trigger={<Button icon>Hover me</Button>}
        content='Hide the popup on any scroll event'
        hideOnScroll
      />
    </div>
    <br/>
    <br/>
    <Popup
      trigger={<Button icon='add' content='Add a friend'/>}
      content='Sends an email invite to a friend.'
      on='hover'
    />
    <br/>
    <br/>
    <Popup
      trigger={<Button color='red' icon='flask' content='Activate doomsday device'/>}
      content={<Button color='green' content='Confirm the launch'/>}
      on='click'
      position='top right'
    />
    <br/>
    <br/>
    <Popup
      trigger={<Input icon='search' placeholder='Search...'/>}
      header='Movie Search'
      content='You may search by genre, header, year and actors'
      on='focus'
    />
    <br/>
    <br/>
    <Popup wide trigger={<Button content='Are you the one?'/>} on='click'>
      <Grid divided columns='equal'>
        <Grid.Column>
          <Popup
            trigger={<Button color='blue' content='Blue Pill' fluid/>}
            content='The story ends. You wake up in your bed and believe whatever you want to believe.'
            position='top center'
            size='tiny'
            inverted
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={<Button color='red' content='Red Pill' fluid/>}
            content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
            position='top center'
            size='tiny'
            inverted
          />
        </Grid.Column>
      </Grid>
    </Popup>
    <br/>
    <br/>
    <Popup
      trigger={<Button icon>Click me or Hover me</Button>}
      header='Movie Search'
      content='Multiple events can trigger a popup'
      on={['hover', 'click']}
    />
    <br/>
    <br/>
  </div>
);

export default PopupExample