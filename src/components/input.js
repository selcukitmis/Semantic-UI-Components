import React from 'react'
import {Input, Icon, Dropdown, Label, Select, Button} from 'semantic-ui-react'

const options           = [
  {key: '.com', text: '.com', value: '.com'},
  {key: '.net', text: '.net', value: '.net'},
  {key: '.org', text: '.org', value: '.org'},
];
const options2          = [
  {key: 'page', text: 'This Page', value: 'page'},
  {key: 'org', text: 'This Organization', value: 'org'},
  {key: 'site', text: 'Entire Site', value: 'site'},
]
const InputExampleInput = () => (
  <div>
    <Input placeholder='Search...'/>
    <br/>
    <br/>
    <Input focus placeholder='Search...'/>
    <br/>
    <br/>
    <Input loading icon='user' placeholder='Search...'/>

    <br/>
    <br/>
    <Input loading icon='user' iconPosition='left' placeholder='Search...'/>

    <br/>
    <br/>
    <Input error placeholder='Search...'/>

    <br/>
    <br/>
    <Input icon='search' placeholder='Search...'/>

    <br/>
    <br/>
    <Input icon='users' iconPosition='left' placeholder='Search users...'/>

    <br/>
    <br/>
    <Input
      icon={{name: 'search', circular: true, link: true}}
      placeholder='Search...'
    />
    <br/>
    <br/>
    <Input
      icon={<Icon name='search' inverted circular link/>}
      placeholder='Search...'
    />
    <br/>
    <br/>
    <div>
      <Input icon placeholder='Search...'>
        <input/>
        <Icon name='search'/>
      </Input>
      <br/>
      <br/>
      <Input iconPosition='left' placeholder='Email'>
        <Icon name='at'/>
        <input/>
      </Input>
    </div>
    <br/>
    <br/>
    <Input label='http://' placeholder='mysite.com'/>
    <br/>
    <br/>
    <Input
      label={<Dropdown defaultValue='.com' options={options}/>}
      labelPosition='right'
      placeholder='Find domain'
    />
    <br/>
    <br/>
    <Input
      label={{basic: true, content: 'kg'}}
      labelPosition='right'
      placeholder='Enter weight...'
    />
    <br/>
    <br/>
    <Input labelPosition='right' type='text' placeholder='Amount'>
      <Label basic>$</Label>
      <input/>
      <Label>.00</Label>
    </Input>
    <br/>
    <br/>
    <Input
      icon='tags'
      iconPosition='left'
      label={{tag: true, content: 'Add Tag'}}
      labelPosition='right'
      placeholder='Enter tags'
    />
    <br/>
    <br/>
    <Input action='Search' placeholder='Search...'/>

    <br/>
    <br/>
    <Input
      action={{color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout'}}
      actionPosition='left'
      placeholder='Search...'
      defaultValue='52.03'
    />
    <br/>
    <br/>
    <Input
      action={<Dropdown button basic floating options={options2} defaultValue='page'/>}
      icon='search'
      iconPosition='left'
      placeholder='Search...'
    />
    <br/>
    <br/>
    <Input type='text' placeholder='Search...' action>
      <input/>
      <Select compact options={options} defaultValue='articles'/>
      <Button type='submit'>Search</Button>
    </Input>
    <br/>
    <br/>
    <div>
      <Input size='mini' icon='search' placeholder='Search...'/>
      <br/>
      <br/>
      <Input size='small' icon='search' placeholder='Search...'/>
      <br/>
      <br/>
      <Input size='large' icon='search' placeholder='Search...'/>
      <br/>
      <br/>
      <Input size='big' icon='search' placeholder='Search...'/>
      <br/>
      <br/>
      <Input size='huge' icon='search' placeholder='Search...'/>
      <br/>
      <br/>
      <Input size='massive' icon='search' placeholder='Search...'/>
    </div>
    <br/>
    <br/>
    <Input list='languages' placeholder='Choose language...'/>
    <datalist id='languages'>
      <option value='English'/>
      <option value='Chinese'/>
      <option value='Dutch'/>
    </datalist>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
);

export default InputExampleInput