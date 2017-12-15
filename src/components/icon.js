import React, {Component} from 'react';
import { Icon,Header } from 'semantic-ui-react'

export default class Icons extends Component {
  render() {
    return (
      <div>
        <div>
          <Icon loading name='spinner'/>
          <Icon loading name='certificate'/>
          <Icon loading name='asterisk'/>
          <Icon loading name='user'/>
        </div>
        <div>
          <Icon circular name='users' />
          <Icon circular color='teal' name='users' />
          <Icon circular inverted name='users' />
          <Icon circular inverted color='teal' name='users' />
        </div>
        <div>
          <Icon bordered name='users' />
          <Icon bordered color='teal' name='users' />
          <Icon bordered inverted color='black' name='users' />
          <Icon bordered inverted color='teal' name='users' />
        </div>
        <div>
          <Icon color='red' name='users' />
          <Icon color='orange' name='users' />
          <Icon color='yellow' name='users' />
          <Icon color='olive' name='users' />
          <Icon color='green' name='users' />
          <Icon color='teal' name='users' />
          <Icon color='blue' name='users' />
          <Icon color='violet' name='users' />
          <Icon color='purple' name='users' />
          <Icon color='pink' name='users' />
          <Icon color='brown' name='users' />
          <Icon color='grey' name='users' />
          <Icon color='black' name='users' />
        </div>
        <Icon.Group size='huge'>
          <Icon size='big' name='thin circle' />
          <Icon name='user' />
        </Icon.Group>
        <div>
          <Icon.Group size='huge'>
            <Icon size='big' color='red' name='dont' />
            <Icon color='black' name='user' />
          </Icon.Group>
          <Icon.Group size='huge'>
            <Icon loading size='big' name='sun' />
            <Icon name='user' />
          </Icon.Group>
        </div>
        <Header as='h2'>
          <Icon.Group size='large'>
            <Icon name='twitter' />
            <Icon corner name='add' />
          </Icon.Group>
          Add on Twitter
        </Header>
        <div>
          <Icon flipped='horizontally' name='cloud' />
          <Icon flipped='vertically' name='cloud' />
        </div>
        <div>
          <Icon rotated='clockwise' name='cloud' />
          <Icon rotated='counterclockwise' name='cloud' />
        </div>
      </div>
    );
  }
}
