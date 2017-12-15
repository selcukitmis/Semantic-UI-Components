import React from 'react'
import {List, Icon, Image} from 'semantic-ui-react'

const ListExampleBasic = () => (
  <div>
    <List>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
    <br/>
    <List items={['Apples', 'Pears', 'Oranges']}/>
    <br/>
    <List>
      <List.Item>
        <List.Icon name='users'/>
        <List.Content>Semantic UI</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker'/>
        <List.Content>New York, NY</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='mail'/>
        <List.Content>
          <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='linkify'/>
        <List.Content>
          <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List>
      <List.Item icon='users' content='Semantic UI'/>
      <List.Item icon='marker' content='New York, NY'/>
      <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}/>
      <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}/>
    </List>
    <br/>
    <List divided relaxed>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
          <List.Description as='a'>Updated 22 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
          <List.Description as='a'>Updated 34 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List>
      <List.Item>
        <List.Icon name='folder'/>
        <List.Content>
          <List.Header>src</List.Header>
          <List.Description>Source files for project</List.Description>
          <List.List>
            <List.Item>
              <List.Icon name='folder'/>
              <List.Content>
                <List.Header>site</List.Header>
                <List.Description>Your site's theme</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='folder'/>
              <List.Content>
                <List.Header>themes</List.Header>
                <List.Description>Packaged theme files</List.Description>
                <List.List>
                  <List.Item>
                    <List.Icon name='folder'/>
                    <List.Content>
                      <List.Header>default</List.Header>
                      <List.Description>Default packaged theme</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='folder'/>
                    <List.Content>
                      <List.Header>my_theme</List.Header>
                      <List.Description>Packaged themes are also available in this folder</List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='file'/>
              <List.Content>
                <List.Header>theme.config</List.Header>
                <List.Description>Config file for setting packaged themes</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='folder'/>
        <List.Content>
          <List.Header>dist</List.Header>
          <List.Description>Compiled CSS and JS files</List.Description>
          <List.List>
            <List.Item>
              <List.Icon name='folder'/>
              <List.Content>
                <List.Header>components</List.Header>
                <List.Description>Individual component CSS and JS</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='file'/>
        <List.Content>
          <List.Header>semantic.json</List.Header>
          <List.Description>Contains build settings for gulp</List.Description>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List bulleted>
      <List.Item>Gaining Access</List.Item>
      <List.Item>Inviting Friends</List.Item>
      <List.Item>
        Benefits

        <List.List>
          <List.Item href='#'>Link to somewhere</List.Item>
          <List.Item>Rebates</List.Item>
          <List.Item>Discounts</List.Item>
        </List.List>
      </List.Item>
      <List.Item>Warranty</List.Item>
    </List>
    <br/>
    <List as='ul'>
      <List.Item as='li'>Gaining Access</List.Item>
      <List.Item as='li'>Inviting Friends</List.Item>
      <List.Item as='li'>
        Benefits

        <List.List as='ul'>
          <List.Item as='li'>
            <a href='#'>Link to somewhere</a>
          </List.Item>
          <List.Item as='li'>Rebates</List.Item>
          <List.Item as='li'>Discounts</List.Item>
        </List.List>
      </List.Item>
      <List.Item as='li'>Warranty</List.Item>
    </List>
    <br/>
    <List bulleted horizontal>
      <List.Item as='a'>About Us</List.Item>
      <List.Item as='a'>Sitemap</List.Item>
      <List.Item as='a'>Contact</List.Item>
    </List>
    <br/>
    <List ordered>
      <List.Item as='a'>Getting Started</List.Item>
      <List.Item as='a'>Introduction</List.Item>
      <List.Item>
        <a>Languages</a>
        <List.List>
          <List.Item as='a'>HTML</List.Item>
          <List.Item as='a'>Javascript</List.Item>
          <List.Item as='a'>CSS</List.Item>
        </List.List>
      </List.Item>
      <List.Item as='a'>Review</List.Item>
    </List>
    <br/>
    <List as='ol'>
      <List.Item as='li'>Signing Up</List.Item>
      <List.Item as='li'>User Benefits</List.Item>
      <List.Item as='li'>User Types
        <List.List as='ol'>
          <List.Item as='li'>Admin</List.Item>
          <List.Item as='li'>Power User</List.Item>
          <List.Item as='li'>Regular User</List.Item>
        </List.List>
      </List.Item>
      <List.Item as='li'>Deleting Your Account</List.Item>
    </List>
    <br/>
    <List as='ol'>
      <List.Item as='li' value='*'>Signing Up</List.Item>
      <List.Item as='li' value='*'>User Benefits</List.Item>
      <List.Item as='li' value='*'>
        User Types
        <List.Item as='ol'>
          <List.Item as='li' value='-'>Admin</List.Item>
          <List.Item as='li' value='-'>Power User</List.Item>
          <List.Item as='li' value='-'>Regular User</List.Item>
        </List.Item>
      </List.Item>
      <List.Item as='li' value='*'>Deleting Your Account</List.Item>
    </List>
    <br/>
    <List link>
      <List.Item active>Home</List.Item>
      <List.Item as='a'>About</List.Item>
      <List.Item as='a'>Jobs</List.Item>
      <List.Item as='a'>Team</List.Item>
    </List>
    <br/>
    <List>
      <List.Item>1</List.Item>
      <List.Item>2</List.Item>
      <List.Item>3</List.Item>
    </List>
    <br/>
    <List>
      <List.Item as='a'>
        <Icon name='help'/>
        <List.Content>
          <List.Header>Floated Icon</List.Header>
          <List.Description>
            This text will always have a left margin to make sure it sits alongside your icon
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item as='a'>
        <Icon name='right triangle'/>
        <List.Content>
          <List.Header>Icon Alignment</List.Header>
          <List.Description>
            Floated icons are by default top aligned. To have an icon top aligned try this example.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name='help'/>
        Inline Text
      </List.Item>
    </List>
    <br/>
    <List>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/rachel.png'/>
        <List.Content>
          <List.Header as='a'>Rachel</List.Header>
          <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/lindsay.png'/>
        <List.Content>
          <List.Header as='a'>Lindsay</List.Header>
          <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/matthew.png'/>
        <List.Content>
          <List.Header as='a'>Matthew</List.Header>
          <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/jenny.jpg'/>
        <List.Content>
          <List.Header as='a'>Jenny Hess</List.Header>
          <List.Description>Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/veronika.jpg'/>
        <List.Content>
          <List.Header as='a'>Veronika Ossi</List.Header>
          <List.Description>Has not watched anything recently</List.Description>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List>
      <List.Item as='a'>What is a FAQ?</List.Item>
      <List.Item as='a'>Who is our user?</List.Item>
      <List.Item as='a'>Where is our office located?</List.Item>
    </List>
    <br/>
    <List>
      <List.Item>
        <List.Header as='a'>Header</List.Header>
        <List.Description>
          Click a link in our <a>description</a>.
        </List.Description>
      </List.Item>
      <List.Item>
        <List.Header as='a'>Learn More</List.Header>
        <List.Description>
          Learn more about this site on <a>our FAQ page</a>.
        </List.Description>
      </List.Item>
    </List>
    <br/>
    <List horizontal>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/tom.jpg'/>
        <List.Content>
          <List.Header>Tom</List.Header>
          Top Contributor
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/christian.jpg'/>
        <List.Content>
          <List.Header>Christian Rocha</List.Header>
          Admin
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/matt.jpg'/>
        <List.Content>
          <List.Header>Matt</List.Header>
          Top Rated User
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List horizontal ordered>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/tom.jpg'/>
        <List.Content>
          <List.Header>Tom</List.Header>
          Top Contributor
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/christian.jpg'/>
        <List.Content>
          <List.Header>Christian Rocha</List.Header>
          Admin
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/matt.jpg'/>
        <List.Content>
          <List.Header>Matt</List.Header>
          Top Rated User
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List bulleted horizontal link>
      <List.Item as='a'>Terms and Conditions</List.Item>
      <List.Item as='a'>Privacy Policy</List.Item>
      <List.Item as='a'>Contact Us</List.Item>
    </List>
    <br/>
    <List selection verticalAlign='middle'>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/helen.jpg'/>
        <List.Content>
          <List.Header>Helen</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/christian.jpg'/>
        <List.Content>
          <List.Header>Christian</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/daniel.jpg'/>
        <List.Content>
          <List.Header>Daniel</List.Header>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List animated verticalAlign='middle'>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/helen.jpg'/>
        <List.Content>
          <List.Header>Helen</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/christian.jpg'/>
        <List.Content>
          <List.Header>Christian</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/daniel.jpg'/>
        <List.Content>
          <List.Header>Daniel</List.Header>
        </List.Content>
      </List.Item>
    </List>
    <br/>
    <List relaxed>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/daniel.jpg'/>
        <List.Content>
          <List.Header as='a'>Daniel Louise</List.Header>
          <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/stevie.jpg'/>
        <List.Content>
          <List.Header as='a'>Stevie Feliciano</List.Header>
          <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/assets/images/avatar/small/elliot.jpg'/>
        <List.Content>
          <List.Header as='a'>Elliot Fu</List.Header>
          <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default ListExampleBasic