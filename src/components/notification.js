import React, {Component} from 'react'
import {Button, Grid, Header, Label, Segment, Portal} from 'semantic-ui-react'

export default class PortalExamplePortal extends Component {
  state = {
    log     : [],
    logCount: 0,
    open    : false,
  }

  handleOpen = () => {
    this.setState({open: true})
    this.writeLog('onOpen()')
  }

  handleClose = () => {
    this.setState({open: false})
    this.writeLog('onClose()')
  }
  handleClick = () => this.setState({open: !this.state.open});
  clearLog    = () => this.setState({log: [], logCount: 0})

  writeLog = eventName => this.setState(({
    log     : [
      `${new Date().toLocaleTimeString()}: ${eventName}`,
      ...this.state.log,
    ].slice(0, 20),
    logCount: this.state.logCount + 1,
  }))

  render() {
    const {log, logCount, open} = this.state;

    return (
      <div>
        <div>
          <Grid columns={2}>
            <Grid.Column>
              <Portal
                closeOnTriggerClick
                openOnTriggerClick
                trigger={(
                  <Button
                    content={open ? 'Close Portal' : 'Open Portal'}
                    negative={open}
                    positive={!open}
                  />
                )}
                onOpen={this.handleOpen}
                onClose={this.handleClose}
              >
                <Segment style={{left: '40%', position: 'fixed', top: '50%', zIndex: 1000}}>
                  <Header>This is an example portal</Header>
                  <p>Portals have tons of great callback functions to hook into.</p>
                  <p>To close, simply click the close button or click away</p>
                </Segment>
              </Portal>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group>
                <Segment>
                  <Button compact size='small' floated='right' onClick={this.clearLog}>Clear</Button>
                  Event Log <Label circular>{logCount}</Label>
                </Segment>
                <Segment secondary>
                  <pre>{log.map((e, i) => <div key={i}>{e}</div>)}</pre>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </div>
        <br/>
        <div>
          <Grid columns={2}>
            <Grid.Column>
              <Button
                content={open ? 'Close Portal' : 'Open Portal'}
                negative={open}
                positive={!open}
                onClick={this.handleClick}
              />

              <Portal onClose={this.handleClose} open={open}>
                <Segment style={{left: '40%', position: 'fixed', top: '50%', zIndex: 1000}}>
                  <Header>This is a controlled portal</Header>
                  <p>Portals have tons of great callback functions to hook into.</p>
                  <p>To close, simply click the close button or click away</p>
                </Segment>
              </Portal>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}