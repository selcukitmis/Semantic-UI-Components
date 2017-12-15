import React from 'react'
import {Icon, Step} from 'semantic-ui-react'

const steps            = [
  {key: 'shipping', icon: 'truck', title: 'Shipping', description: 'Choose your shipping options'},
  {key: 'billing', active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information'},
  {key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order'},
]
const StepExampleGroup = () => (
  <div>
    <div>
      <Step.Group>
        <Step>
          <Icon name='truck'/>
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='payment'/>
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='info'/>
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
    <Step.Group items={steps}/>
    <Step.Group ordered>
      <Step completed>
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
    <br/>
    <br/>
    <Step.Group vertical>
      <Step completed>
        <Icon name='truck'/>
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step completed>
        <Icon name='payment'/>
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='info'/>
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
    <br/>
    <br/>
    <Step.Group>
      <Step link>
        <Icon name='truck'/>
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
      <Step link>
        <Icon name='credit card'/>
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
    <br /><br />
  </div>
)

export default StepExampleGroup