import React, {Component} from 'react';
import {Button, Icon, Label, Segment} from 'semantic-ui-react'

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <h4>Embasis</h4>
        <div>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>
        <h4>Animated</h4>
        <div>
          <Button animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow'/>
            </Button.Content>
          </Button>
          <Button animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name='shop'/>
            </Button.Content>
          </Button>
          <Button animated='fade'>
            <Button.Content visible>
              Sign-up for a Pro account
            </Button.Content>
            <Button.Content hidden>
              $12.99 a month
            </Button.Content>
          </Button>
        </div>
        <h4>Labeled</h4>
        <div>
          <Button
            content='Like'
            icon='heart'
            label={{as: 'a', basic: true, content: '2,048'}}
            labelPosition='right'
          />
          <Button
            content='Like'
            icon='heart'
            label={{as: 'a', basic: true, pointing: 'right', content: '2,048'}}
            labelPosition='left'
          />
          <Button
            icon='fork'
            label={{as: 'a', basic: true, content: '2,048'}}
            labelPosition='left'
          />
        </div>
        <h4></h4>
        <div>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart'/>
              Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>2,048</Label>
          </Button>
          <Button as='div' labelPosition='right'>
            <Button basic color='blue'>
              <Icon name='fork'/>
              Fork
            </Button>
            <Label as='a' basic color='blue' pointing='left'>2,048</Label>
          </Button>
        </div>
        <h4>Labeled Icon</h4>
        <div>
          <Button icon labelPosition='left'>
            <Icon name='pause'/>
            Pause
          </Button>
          <Button icon labelPosition='right'>
            Next
            <Icon name='right arrow'/>
          </Button>
        </div>
        <h4>Basic</h4>
        <div>
          <Button content='Standard' basic/>
          <Button basic color='red' content='Red'/>
          <Button basic color='orange' content='Orange'/>
          <Button basic color='yellow' content='Yellow'/>
          <Button basic color='olive' content='Olive'/>
          <Button basic color='green' content='Green'/>
          <Button basic color='teal' content='Teal'/>
          <Button basic color='blue' content='Blue'/>
          <Button basic color='violet' content='Violet'/>
          <Button basic color='purple' content='Purple'/>
          <Button basic color='pink' content='Pink'/>
          <Button basic color='brown' content='Brown'/>
          <Button basic color='grey' content='Grey'/>
          <Button basic color='black' content='Black'/>
        </div>
        <h4>Inverted</h4>
        <div>
          <Segment inverted>
            <Button inverted>Standard</Button>
            <Button inverted color='red'>Red</Button>
            <Button inverted color='orange'>Orange</Button>
            <Button inverted color='yellow'>Yellow</Button>
            <Button inverted color='olive'>Olive</Button>
            <Button inverted color='green'>Green</Button>
            <Button inverted color='teal'>Teal</Button>
            <Button inverted color='blue'>Blue</Button>
            <Button inverted color='violet'>Violet</Button>
            <Button inverted color='purple'>Purple</Button>
            <Button inverted color='pink'>Pink</Button>
            <Button inverted color='brown'>Brown</Button>
            <Button inverted color='grey'>Grey</Button>
            <Button inverted color='black'>Black</Button>
          </Segment>
          <Segment inverted>
            <Button basic inverted>Standard</Button>
            <Button basic inverted color='red'>Red</Button>
            <Button basic inverted color='orange'>Orange</Button>
            <Button basic inverted color='yellow'>Yellow</Button>
            <Button basic inverted color='olive'>Olive</Button>
            <Button basic inverted color='green'>Green</Button>
            <Button basic inverted color='teal'>Teal</Button>
            <Button basic inverted color='blue'>Blue</Button>
            <Button basic inverted color='violet'>Violet</Button>
            <Button basic inverted color='purple'>Purple</Button>
            <Button basic inverted color='pink'>Pink</Button>
            <Button basic inverted color='brown'>Brown</Button>
            <Button basic inverted color='grey'>Grey</Button>
            <Button basic inverted color='black'>Black</Button>
          </Segment>
        </div>
        <h4>Groups</h4>
        <div>
          <Button.Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </div>
        <h4></h4>
        <div>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button positive>Save</Button>
          </Button.Group>
        </div>
        <br/>
        <h4>Floated</h4>
        <div>
          <Button floated='right'>Right Floated</Button>
          <Button floated='left'>Left Floated</Button>
        </div>
        <br />
        <h4>Colored</h4>
        <div>
          <Button color='red'>Red</Button>
          <Button color='orange'>Orange</Button>
          <Button color='yellow'>Yellow</Button>
          <Button color='olive'>Olive</Button>
          <Button color='green'>Green</Button>
          <Button color='teal'>Teal</Button>
          <Button color='blue'>Blue</Button>
          <Button color='violet'>Violet</Button>
          <Button color='purple'>Purple</Button>
          <Button color='pink'>Pink</Button>
          <Button color='brown'>Brown</Button>
          <Button color='grey'>Grey</Button>
          <Button color='black'>Black</Button>
        </div>
        <div>
          <Button negative>Negative Button</Button>
        </div>
        <Button fluid>Fits to Container</Button>
        <Button circular icon='settings' />
        <div>
          <Button circular color='facebook' icon='facebook' />
          <Button circular color='twitter' icon='twitter' />
          <Button circular color='linkedin' icon='linkedin' />
          <Button circular color='google plus' icon='google plus' />
        </div>
        <Button.Group color='blue'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <br />
        <br />
        <Button.Group>
          <Button basic color='red'>One</Button>
          <Button basic color='green'>Two</Button>
          <Button basic color='blue'>Three</Button>
        </Button.Group>


        <br />
        <br />
      </div>
    );
  }
}
