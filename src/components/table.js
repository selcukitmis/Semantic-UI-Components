import React from 'react'
import {Header, Table, Icon, Menu, Image, Label, Rating} from 'semantic-ui-react'

const colors    = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
];
const tableData = [
  {name: 'John', age: 15, gender: 'Male'},
  {name: 'Amber', age: 40, gender: 'Female'},
  {name: 'Leslie', age: 25, gender: 'Female'},
  {name: 'Ben', age: 70, gender: 'Male'},
];

const TableExamplePadded = () => (
  <div>
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
            <Table.HeaderCell>Effect</Table.HeaderCell>
            <Table.HeaderCell>Efficacy</Table.HeaderCell>
            <Table.HeaderCell>Consensus</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='center'>A</Header>
            </Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3}/>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              80% <br/>
              <a href='#'>18 studies</a>
            </Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
              variability in this increase, however, with some nonresponders.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='center'>A</Header>
            </Table.Cell>
            <Table.Cell singleLine>Weight</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3}/>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              100% <br/>
              <a href='#'>65 studies</a>
            </Table.Cell>
            <Table.Cell>
              Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
              potency
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <br/><br/>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='left chevron'/>
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='right chevron'/>
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Employee</Table.HeaderCell>
          <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/small/lena.png' rounded size='mini'/>
              <Header.Content>
                Lena
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            22
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/small/lena.png' rounded size='mini'/>
              <Header.Content>
                Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/small/lena.png' rounded size='mini'/>
              <Header.Content>
                Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            12
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/small/lena.png' rounded size='mini'/>
              <Header.Content>
                Mark
                <Header.Subheader>Executive</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            11
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name='folder'/> node_modules
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='folder'/> test
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='folder'/> build
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline'/> package.json
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline'/> Gruntfile.js
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell/>
          <Table.HeaderCell>Arguments</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>reset rating</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>Resets rating to default value</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>set rating</Table.Cell>
          <Table.Cell>rating (integer)</Table.Cell>
          <Table.Cell>Sets the current star rating to specified value</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>No Name Specified</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell negative>None</Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Jimmy</Table.Cell>
          <Table.Cell>
            <Icon name='checkmark'/>
            Approved
          </Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell positive>
            <Icon name='close'/>
            Requires call
          </Table.Cell>
        </Table.Row>
        <Table.Row negative>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>No Name Specified</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row error>
          <Table.Cell>Jimmy</Table.Cell>
          <Table.Cell>Cannot pull data</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell error>
            <Icon name='attention'/>
            Classified
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Selected</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell active>Jill</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>No Action</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row warning>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>No Action</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell positive>Approved</Table.Cell>
          <Table.Cell warning>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell negative>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell textAlign='right'>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell textAlign='right'>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell textAlign='right'>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Date Joined</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Called</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br/><br/>
    <Table columns={5}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>Male</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>Male</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>Female</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell/>
          <Table.HeaderCell/>
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={10}>Name</Table.HeaderCell>
          <Table.HeaderCell width='six'>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <Table collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <div>
      {colors.map(color => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Food</Table.HeaderCell>
              <Table.HeaderCell>Calories</Table.HeaderCell>
              <Table.HeaderCell>Protein</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Apples</Table.Cell>
              <Table.Cell>200</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Orange</Table.Cell>
              <Table.Cell>310</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </div>
    <br/><br/>
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <div>
      {colors.map(color => (
        <Table color={color} key={color} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Food</Table.HeaderCell>
              <Table.HeaderCell>Calories</Table.HeaderCell>
              <Table.HeaderCell>Protein</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Apples</Table.Cell>
              <Table.Cell>200</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Orange</Table.Cell>
              <Table.Cell>310</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </div>
    <br/><br/>
    <Table size='small'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
    <Table size='large'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Footer>
    </Table>
    <br/><br/>
  </div>
);

export default TableExamplePadded