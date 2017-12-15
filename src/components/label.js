import React from 'react'
import _ from 'lodash'
import {Icon, Label, Form, List, Menu, Grid, Image, Segment, Divider} from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

const url               = "https://react.semantic-ui.com/assets/images/wireframe/image.png";
const url2              = "https://react.semantic-ui.com/assets/images/wireframe/paragraph.png";
const colors            = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]
const LabelExampleBasic = () => (
  <div>
    <Label>
      <Icon name='mail'/> 23
    </Label>
    <br/>
    <br/>
    <div>
      <Label as='a' image>
        <img src={url}/>
        Joe
      </Label>
      <Label as='a' image>
        <img src={url}/>
        Elliot
      </Label>
      <Label as='a' image>
        <img src={url}/>
        Stevie
      </Label>
    </div>
    <br/>
    <br/>
    <div>
      <Label as='a' color='blue' image>
        <img src={url}/>
        Veronika
        <Label.Detail>Friend</Label.Detail>
      </Label>
      <Label as='a' color='teal' image>
        <img src={url}/>
        Veronika
        <Label.Detail>Friend</Label.Detail>
      </Label>
      <Label as='a' color='yellow' image>
        <img src={url}/>
        Helen
        <Label.Detail>Co-worker</Label.Detail>
      </Label>
    </div>
    <br/>
    <br/>
    <div>
      <Label image>
        <img src={url}/>
        Adrienne
        <Icon name='delete'/>
      </Label>
      <Label image>
        <img src={url}/>
        Zoe
        <Icon name='delete'/>
      </Label>
      <Label image>
        <img src={url}/>
        Nan
        <Icon name='delete'/>
      </Label>
    </div>
    <br/>
    <br/>
    <Form>
      <Form.Field>
        <input type='text' placeholder='First name'/>
        <Label pointing>Please enter a value</Label>
      </Form.Field>
      <Divider/>

      <Form.Field>
        <Label pointing='below'>Please enter a value</Label>
        <input type='text' placeholder='Last Name'/>
      </Form.Field>
      <Divider/>

      <Form.Field inline>
        <input type='text' placeholder='Username'/>
        <Label pointing='left'>That name is taken!</Label>
      </Form.Field>
      <Divider/>

      <Form.Field inline>
        <Label pointing='right'>Your password must be 6 characters or more</Label>
        <input type='password' placeholder='Password'/>
      </Form.Field>
    </Form>
    <br/>
    <br/>
    <Form>
      <Form.Field>
        <input type='text' placeholder='First name'/>
        <Label basic color='red' pointing>Please enter a value</Label>
      </Form.Field>
      <Divider/>

      <Form.Field>
        <Label basic color='red' pointing='below'>Please enter a value</Label>
        <input type='text' placeholder='Last Name'/>
      </Form.Field>
      <Divider/>

      <Form.Field inline>
        <input type='text' placeholder='Username'/>
        <Label basic color='red' pointing='left'>That name is taken!</Label>
      </Form.Field>
      <Divider/>

      <Form.Field inline>
        <Label basic color='red' pointing='right'>Your password must be 6 characters or more</Label>
        <input type='password' placeholder='Password'/>
      </Form.Field>
    </Form>
    <br/>
    <br/>
    <Grid columns={2}>
      <Grid.Column>
        <Image
          fluid
          label={{as: 'a', corner: 'left', icon: 'heart'}}
          src={url}
        />
      </Grid.Column>

      <Grid.Column>
        <Image
          fluid
          label={{as: 'a', color: 'red', corner: 'right', icon: 'save'}}
          src={url}
        />
      </Grid.Column>
    </Grid>
    <br/>
    <br/>
    <Grid columns={2}>
      <Grid.Column>
        <Segment raised>
          <Label as='a' color='red' ribbon>Overview</Label>
          <span>Account Details</span>

          <Image src={url2}/>

          <Label as='a' color='blue' ribbon>Community</Label>
          <span>User Reviews</span>

          <Image src={url2}/>
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Label as='a' color='orange' ribbon='right'>Specs</Label>
          <Image src={url2}/>

          <Label as='a' color='teal' ribbon='right'>Reviews</Label>
          <Image src={url2}/>
        </Segment>
      </Grid.Column>
    </Grid>
    <br/>
    <br/>
    <Grid columns={2}>
      <Grid.Column>
        <Image
          fluid
          label={{as: 'a', color: 'black', content: 'Hotel', icon: 'hotel', ribbon: true}}
          src={url}
        />
      </Grid.Column>

      <Grid.Column>
        <Image
          fluid
          label={{as: 'a', color: 'blue', content: 'Food', icon: 'spoon', ribbon: true}}
          src={url}
        />
      </Grid.Column>
    </Grid>
    <br/>
    <br/>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment padded>
            <Label attached='top'>HTML</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached='bottom'>CSS</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached='top right'>Code</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment padded>
            <Label attached='top left'>View</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached='bottom left'>User View</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached='bottom right'>Admin View</Label>
            <Image src={url2}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br/>
    <br/>
    <List divided selection>
      <List.Item>
        <Label color='red' horizontal>Fruit</Label>
        Kumquats
      </List.Item>
      <List.Item>
        <Label color='purple' horizontal>Candy</Label>
        Ice Cream
      </List.Item>
      <List.Item>
        <Label color='red' horizontal>Fruit</Label>
        Orange
      </List.Item>
      <List.Item>
        <Label horizontal>Dog</Label>
        Poodle
      </List.Item>
    </List>
    <br/>
    <br/>
    <Menu compact>
      <Menu.Item as='a'>
        <Icon name='mail'/> Messages
        <Label color='red' floating>22</Label>
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='users'/> Friends
        <Label color='teal' floating>22</Label>
      </Menu.Item>
    </Menu>
    <br/>
    <br/>
    <div>
      {colors.map(color => <Label circular color={color} key={color}>2</Label>)}
    </div>
    <br/>
    <br/>
    <div>
      {colors.map(color => <Label circular color={color} empty key={color}/>)}
    </div>
    <br/>
    <br/>
    <div>
      <Label as='a' basic>Basic</Label>
      <Label as='a' basic pointing>Pointing</Label>
      <Label as='a' basic image>
        <img src={url}/>
        Elliot
      </Label>
      <Label as='a' basic color='red' pointing>Red Pointing</Label>
      <Label as='a' basic color='blue'>Blue</Label>
    </div>
    <br/>
    <br/>
    <div>
      {colors.map(color => (
        <Label color={color} key={color}>
          {_.capitalize(color)}
        </Label>
      ))}
    </div>
    <br/>
    <br/>
    <div>
      {sizes.map(size => (
        <Label key={size} size={size}>
          {_.capitalize(size)}
        </Label>
      ))}
    </div>
    <br/>
    <br/>
    <Label.Group size='huge'>
      <Label>Fun</Label>
      <Label>Happy</Label>
      <Label>Smart</Label>
      <Label>Witty</Label>
    </Label.Group>
    <br/>
    <br/>
    <Label.Group color='blue'>
      <Label as='a'>
        Fun
        <Icon name='close'/>
      </Label>
      <Label as='a'>
        Happy
        <Label.Detail>22</Label.Detail>
      </Label>
      <Label as='a'>Smart</Label>
      <Label as='a'>Insane</Label>
      <Label as='a'>Exciting</Label>
    </Label.Group>
    <br/>
    <br/>
    <Label.Group tag>
      <Label as='a'>$10.00</Label>
      <Label as='a'>$19.99</Label>
      <Label as='a'>$24.99</Label>
      <Label as='a'>$30.99</Label>
      <Label as='a'>$10.25</Label>
    </Label.Group>
    <br/>
    <br/>
    <Label.Group circular>
      <Label as='a'>11</Label>
      <Label as='a'>22</Label>
      <Label as='a'>33</Label>
      <Label as='a'>44</Label>
      <Label as='a'>141</Label>
    </Label.Group>
    <br/>
  </div>
);

export default LabelExampleBasic