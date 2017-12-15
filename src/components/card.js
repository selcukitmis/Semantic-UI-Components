import React, {Component} from 'react';
import {Card, Icon, Image, Button,Feed} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user'/>
    16 Friends
  </a>
);
const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
];
const image = "https://react.semantic-ui.com/assets/images/avatar/large/matthew.png";
const src = "https://react.semantic-ui.com/assets/images/avatar/large/matthew.png";
const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ');
export default class Cards extends Component {

  render() {
    return (
      <div>
        <Card>
          <Image src={image}/>
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user'/>
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Card
          image={image}
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          extra={extra}
        />
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src={image}/>
              <Card.Header>
                Steve Sanders
              </Card.Header>
              <Card.Meta>
                Friends of Elliot
              </Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src={image}/>
              <Card.Header>
                Molly Thomas
              </Card.Header>
              <Card.Meta>
                New User
              </Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src={image}/>
              <Card.Header>
                Jenny Lawrence
              </Card.Header>
              <Card.Meta>
                New User
              </Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group items={items} />
        <Card>
          <Card.Content>
            <Card.Header>
              Recent Activity
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                  <Feed.Date content='1 day ago' />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header='About Amy' />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name='user' />
            4 Friends
          </Card.Content>
        </Card>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header content='Jake Smith' />
              <Card.Meta content='Musicians' />
              <Card.Description content='Jake is a drummer living in New York.' />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a music producer living in Chicago.'
            />
          </Card>
          <Card
            header='Jenny Hess'
            meta='Friend'
            description='Jenny is a student studying Media Management at the New School'
          />
        </Card.Group>
        <Card.Group>
          <Card fluid color='green' header='Option 1' />
          <Card fluid color='orange' header='Option 2' />
          <Card fluid color='yellow' header='Option 3' />
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card color='red' image={image} />
          <Card color='orange' image={image} />
          <Card color='yellow' image={image} />
          <Card color='olive' image={image} />
          <Card color='green' image={image} />
          <Card color='teal' image={image} />
          <Card color='blue' image={image} />
          <Card color='violet' image={image} />
          <Card color='purple' image={image} />
          <Card color='pink' image={image} />
          <Card color='brown' image={image} />
          <Card color='grey' image={image} />
        </Card.Group>
        <Card.Group itemsPerRow={8}>
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
        </Card.Group>
        <br/>
        <br/>
      </div>
    );
  }
}
