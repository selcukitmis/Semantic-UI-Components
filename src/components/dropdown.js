import React from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'

const friendOptions            = [
  {
    text : 'Jenny Hess',
    value: 'Jenny Hess',
    image: {avatar: true, src: '/assets/images/avatar/small/jenny.jpg'},
  }, {
    text : 'Hess Jenny ',
    value: 'Jenny Hesssadsa asdasd',
    image: {avatar: true, src: '/assets/images/avatar/small/jenny.jpg'},
  },
];
var stateOptions               = [{key: 'AL', value: 'AL', text: 'Alabama'}, {key: 'TR', value: 'TR', text: 'Türkiye'}];
const options                  = [
  {key: 'angular', text: 'Angular', value: 'angular'},
  {key: 'css', text: 'CSS', value: 'css'},
  {key: 'design', text: 'Graphic Design', value: 'design'},
  {key: 'ember', text: 'Ember', value: 'ember'},
  {key: 'html', text: 'HTML', value: 'html'},
  {key: 'ia', text: 'Information Architecture', value: 'ia'},
  {key: 'javascript', text: 'Javascript', value: 'javascript'},
  {key: 'mech', text: 'Mechanical Engineering', value: 'mech'},
  {key: 'meteor', text: 'Meteor', value: 'meteor'},
  {key: 'node', text: 'NodeJS', value: 'node'},
  {key: 'plumbing', text: 'Plumbing', value: 'plumbing'},
  {key: 'python', text: 'Python', value: 'python'},
  {key: 'rails', text: 'Rails', value: 'rails'},
  {key: 'react', text: 'React', value: 'react'},
  {key: 'repair', text: 'Kitchen Repair', value: 'repair'},
  {key: 'ruby', text: 'Ruby', value: 'ruby'},
  {key: 'ui', text: 'UI Design', value: 'ui'},
  {key: 'ux', text: 'User Experience', value: 'ux'},
]
const languageOptions          = [{key: 'Arabic', text: 'Arabic', value: 'Arabic'}];
const DropdownExampleSelection = () => (
  <div>
    <Dropdown placeholder='Select Friend' fluid selection options={friendOptions}/>
    <br/>
    <Dropdown placeholder='State' search selection options={stateOptions}/>
    <br/>
    <br/>
    <Dropdown placeholder='Skills' fluid multiple selection options={options}/>
    <br/>
    <br/>
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='world'
      options={languageOptions}
      search
      text='Select Language'
    />
  </div>
);

export default DropdownExampleSelection