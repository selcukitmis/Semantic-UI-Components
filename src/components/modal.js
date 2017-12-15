import React from 'react'
import {Popup, Button, Header, Image, Modal, Icon} from 'semantic-ui-react'

const url  = "https://react.semantic-ui.com/assets/images/wireframe/image.png";
const url2 = "https://react.semantic-ui.com/assets/images/wireframe/paragraph.png";

export default class ModalModalExample extends React.Component {
  state           = {open: false};
  show            = dimmer => () => this.setState({dimmer, open: true});
  close           = () => this.setState({open: false});
  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({closeOnEscape, closeOnRootNodeClick, open: true})
  }

  render() {
    const {open, dimmer, closeOnEscape, closeOnRootNodeClick} = this.state;
    return (
      <div>
        <div>
          <Modal style={{height: '400px'}} trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='small' src={url}/>
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
        <br/>
        <div>
          <Modal style={{height: '400px'}} trigger={<Button>Basic Modal</Button>} basic size='small'>
            <Header icon='archive' content='Archive Old Messages'/>
            <Modal.Content>
              <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' inverted>
                <Icon name='remove'/> No
              </Button>
              <Button color='green' inverted>
                <Icon name='checkmark'/> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
        <br/>
        <div>
          <Modal trigger={<Button>Long Modal</Button>}>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={url}/>
              <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
                <Image src={url2}/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='right chevron'/>
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
        <br/>
        <div>
          <Modal trigger={<Button>Scrolling Content Modal</Button>}>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
              <Image
                size='medium'
                src='/assets/images/wireframe/image.png'
                wrapped
              />

              <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

                {_.times(8, i => (
                  <Image
                    key={i}
                    src={url2}
                    style={{paddingBottom: 5}}
                  />
                ))}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='right chevron'/>
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
        <br/>
        <div>
          <Button onClick={this.show(true)}>Default</Button>
          <Button onClick={this.show('inverted')}>Inverted</Button>
          <Button onClick={this.show('blurring')}>Blurring</Button>
          <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
            <Popup.Header>Heads up!</Popup.Header>
            <Popup.Content>
              By default, a Modal closes when escape is pressed or when the dimmer is
              clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
              dimmer to click so clicking outside won't close the Modal. To close on
              outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
            </Popup.Content>
          </Popup>

          <Modal style={{height: "400px"}} dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png'/>
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close}/>
            </Modal.Actions>
          </Modal>
        </div>
        <br/>
        <div>
          <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
          <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button>

          <Modal
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnRootNodeClick={closeOnRootNodeClick}
            onClose={this.close}
          >
            <Modal.Header>
              Delete Your Account
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete your account</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative>No</Button>
              <Button positive labelPosition='right' icon='checkmark' content='Yes'/>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    )
  }
}
