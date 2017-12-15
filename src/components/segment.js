import React, {Component} from 'react';
import {Segment, Image, Button, Header, Icon, Message} from 'semantic-ui-react'

const url    = "https://react.semantic-ui.com/assets/images/wireframe/paragraph.png";
const square = {width: 175, height: 175};
const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];
export default class Segments extends Component {
  render() {
    return (
      <div>
        <Segment>
          Pellentesque habitant morbi tristique senectus.
        </Segment>

        <Segment raised>
          Pellentesque habitant morbi tristique senectus.
        </Segment>
        <Segment stacked>
          Pellentesque habitant morbi tristique senectus.
        </Segment>
        <Segment piled>
          Pellentesque habitant morbi tristique senectus.
        </Segment>
        <div>
          <Segment vertical>Te eum doming eirmod, nominati pertinacia argumentum ad his.</Segment>
          <Segment vertical>Pellentesque habitant morbi tristique senectus.</Segment>
          <Segment vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>
        </div>
        <Segment.Group>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>
        <Segment.Group>
          <Segment>Top</Segment>
          <Segment.Group>
            <Segment>Nested Top</Segment>
            <Segment>Nested Middle</Segment>
            <Segment>Nested Bottom</Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment>Top</Segment>
            <Segment>Middle</Segment>
            <Segment>Bottom</Segment>
          </Segment.Group>
          <Segment>Bottom</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Left</Segment>
          <Segment>Middle</Segment>
          <Segment>Right</Segment>
        </Segment.Group>
        <Segment.Group raised>
          <Segment>Left</Segment>
          <Segment>Middle</Segment>
          <Segment>Right</Segment>
        </Segment.Group>
        <Segment.Group stacked>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>
        <Segment.Group piled>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>
        <Segment loading>
          <Image src={url}/>
        </Segment>
        <Segment inverted>
          Inverted content.
        </Segment>
        <div>
          <Segment attached='top'>
            This segment is on top
          </Segment>
          <Segment attached>
            This segment is attached on both sides
          </Segment>
          <Segment attached='bottom'>
            This segment is on bottom
          </Segment>
        </div>
        <div>
          <Header as='h5' attached='top'>
            Dogs
          </Header>
          <Segment attached>
            Dogs are one type of animal.
          </Segment>
          <Header as='h5' attached>
            Cats
          </Header>
          <Segment attached>
            Cats are thought of as being related to dogs, but only humans think this.
          </Segment>
          <Header as='h5' attached>
            Lions
          </Header>
          <Segment attached>
            Humans don't think of lions as being like cats, but they are.
          </Segment>
          <Message warning attached='bottom'>
            <Icon name='warning'/>
            You've reached the end of this content segment!
          </Message>
        </div>
        <Segment padded>
          Padded content.
        </Segment>
        <Segment padded='very'>
          Very padded content.
        </Segment>
        <Segment compact>
          Compact content.
        </Segment>
        <Segment.Group compact>
          <Segment>
            Pellentesque habitant morbi
          </Segment>
          <Segment>
            Pellentesque habitant morbi
          </Segment>
        </Segment.Group>
        <div>
          <Segment color='red'>Red</Segment>
          <Segment color='orange'>Orange</Segment>
          <Segment color='yellow'>Yellow</Segment>
          <Segment color='olive'>Olive</Segment>
          <Segment color='green'>Green</Segment>
          <Segment color='teal'>Teal</Segment>
          <Segment color='blue'>Blue</Segment>
          <Segment color='violet'>Violet</Segment>
          <Segment color='purple'>Purple</Segment>
          <Segment color='pink'>Pink</Segment>
          <Segment color='brown'>Brown</Segment>
          <Segment color='grey'>Grey</Segment>
          <Segment color='black'>Black</Segment>
        </div>
        <div>
          <Segment inverted color='red'>Red</Segment>
          <Segment inverted color='orange'>Orange</Segment>
          <Segment inverted color='yellow'>Yellow</Segment>
          <Segment inverted color='olive'>Olive</Segment>
          <Segment inverted color='green'>Green</Segment>
          <Segment inverted color='teal'>Teal</Segment>
          <Segment inverted color='blue'>Blue</Segment>
          <Segment inverted color='violet'>Violet</Segment>
          <Segment inverted color='purple'>Purple</Segment>
          <Segment inverted color='pink'>Pink</Segment>
          <Segment inverted color='brown'>Brown</Segment>
          <Segment inverted color='grey'>Grey</Segment>
          <Segment inverted color='black'>Black</Segment>
        </div>
        <div>
          <Segment>
            I'm here to tell you something, and you will probably read me first.
          </Segment>
          <Segment secondary>
            I am pretty noticeable but you might check out other content before you look at me.
          </Segment>
          <Segment tertiary>
            If you notice me you must be looking very hard.
          </Segment>
        </div>
        <div>
          <Segment inverted>
            I'm here to tell you something, and you will probably read me first.
          </Segment>
          <Segment inverted secondary>
            I am pretty noticeable but you might check out other content before you look at me.
          </Segment>
          <Segment inverted tertiary>
            If you notice me you must be looking very hard.
          </Segment>
        </div>
        <div>
          <Segment inverted color='red'>
            I'm here to tell you something, and you will probably read me first.
          </Segment>
          <Segment inverted color='red' secondary>
            I am pretty noticeable but you might check out other content before you look at me.
          </Segment>
          <Segment inverted color='red' tertiary>
            If you notice me you must be looking very hard.
          </Segment>
        </div>
        <div>
          <Segment circular style={square}>
            <Header as='h2'>
              Sale!
              <Header.Subheader>
                $10.99
              </Header.Subheader>
            </Header>
          </Segment>
          <Segment circular inverted style={square}>
            <Header as='h2' inverted>
              Buy Now
              <Header.Subheader>
                $10.99
              </Header.Subheader>
            </Header>
          </Segment>
        </div>
        <Segment clearing>
          <Button floated='right'>
            floated
          </Button>
        </Segment>
        <div>
          <Segment textAlign='right'>
            Right aligned content.
          </Segment>
          <Segment textAlign='left'>
            Left aligned content.
          </Segment>
          <Segment textAlign='center'>
            Center aligned content.
          </Segment>
        </div>
        <div>
          {sizes.map(size => (
            <Segment key={size} size={size}>
              It's a {size} segment
            </Segment>
          ))}
        </div>
        <div>
          {sizes.map(size => (
            <Segment.Group key={size} size={size}>
              <Segment>
                It's a {size} segment
              </Segment>
              <Segment>
                And it's a {size} segment, too
              </Segment>
            </Segment.Group>
          ))}
        </div>
      </div>

    );
  }
}
