import React from 'react'
import {Segment, Button, Divider} from 'semantic-ui-react'

const DividerExampleHorizontal = () => (
  <div>
    <Segment padded>
      <Button primary fluid>Login</Button>
      <Divider horizontal>Or</Divider>
      <Button secondary fluid>Sign Up Now</Button>
    </Segment>

    <Segment inverted>
      <Divider inverted />
      <Divider horizontal inverted>Horizontal</Divider>
    </Segment>

    <Segment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      <Divider section />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
    </Segment>
  </div>
);

export default DividerExampleHorizontal