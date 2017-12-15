import React from 'react'
import {Button, Form, Icon, Message} from 'semantic-ui-react'

const list                   = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]
const MessageExampleAttached = () => (
  <div>
    <Message>
      <Message.Header>
        Changes in Service
      </Message.Header>
      <p>
        We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
      </p>
    </Message>
    <Message
      header='Changes in Service'
      content='We updated our privacy policy here to better service our customers. We recommend reviewing the changes.'
    />
    <Message>
      <Message.Header>New Site Features</Message.Header>
      <Message.List>
        <Message.Item>You can now have cover images on blog pages</Message.Item>
        <Message.Item>Drafts will now auto-save while writing</Message.Item>
      </Message.List>
    </Message>
    <Message
      header='New Site Features'
      list={list}
    />
    <Message>
      <Message.Header>New Site Features</Message.Header>
      <Message.List items={list}/>
    </Message>
    <Message icon>
      <Icon name='circle notched' loading/>
      <Message.Content>
        <Message.Header>Just one second</Message.Header>
        We are fetching that content for you.
      </Message.Content>
    </Message>
    <Message
      icon='inbox'
      header='Have you heard about our mailing list?'
      content='Get the best news in your e-mail every day.'
    />
    <Message visible>
      You can always see me
    </Message>
    <Message floating>
      Way to go!
    </Message>
    <Message
      floating
      content='Way to go!'
    />
    <Message compact>
      Get all the best inventions in your e-mail every day. Sign up now!
    </Message>
    <Message
      compact
      content='Get all the best inventions in your e-mail every day. Sign up now!'
    />
    <Message info>
      <Message.Header>Was this what you wanted?</Message.Header>
      <p>Did you know it's been a while?</p>
    </Message>
    <Message
      info
      header='Was this what you wanted?'
      content="Did you know it's been a while?"
    />
    <Message warning>
      <Message.Header>You must register before you can do that!</Message.Header>
      <p>Visit our registration page, then try again.</p>
    </Message>
    <Message positive>
      <Message.Header>You are eligible for a reward</Message.Header>
      <p>Go to your <b>special offers</b> page to see now.</p>
    </Message>
    <Message negative>
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired</p>
    </Message>
    <Message
      error
      header='There was some errors with your submission'
      list={[
        'You must include both a upper and lower case letters in your password.',
        'You need to select your home country.',
      ]}
    />
    <div>
      <Message color='red'>Red</Message>
      <Message color='orange'>Orange</Message>
      <Message color='yellow'>Yellow</Message>
      <Message color='olive'>Olive</Message>
      <Message color='green'>Green</Message>
      <Message color='teal'>Teal</Message>
      <Message color='blue'>Blue</Message>
      <Message color='violet'>Violet</Message>
      <Message color='purple'>Purple</Message>
      <Message color='pink'>Pink</Message>
      <Message color='brown'>Brown</Message>
      <Message color='black'>Black</Message>
    </div>
    <div>
      <Message size='mini'>This is a mini message.</Message>
      <Message size='tiny'>This is a tiny message.</Message>
      <Message size='small'>This is a small message.</Message>
      <Message size='large'>This is large</Message>
      <Message size='big'>This is big</Message>
      <Message size='huge'>This is huge</Message>
      <Message size='massive'>This is massive</Message>
    </div>
    <div>
      <Message
        attached
        header='Welcome to our site!'
        content='Fill out the form below to sign-up for a new account'
      />
      <Form className='attached fluid segment'>
        <Form.Group widths='equal'>
          <Form.Input label='First Name' placeholder='First Name' type='text'/>
          <Form.Input label='Last Name' placeholder='Last Name' type='text'/>
        </Form.Group>
        <Form.Input label='Username' placeholder='Username' type='text'/>
        <Form.Input label='Password' type='password'/>
        <Form.Checkbox inline label='I agree to the terms and conditions'/>
        <Button color='blue'>Submit</Button>
      </Form>
      <Message attached='bottom' warning>
        <Icon name='help'/>
        Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
      </Message>
    </div>
  </div>
);

export default MessageExampleAttached