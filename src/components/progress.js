import React from 'react'
import {Progress} from 'semantic-ui-react'

const ProgressExampleColor = () => (
  <div>
    <Progress percent={60} active>
      Active
    </Progress>
    <br />
    <br />
    <Progress value='4' total='5' progress='percent' />
    <br />
    <br />
    <br />
    <div>
      <Progress percent={32} color='red'/>
      <Progress percent={59} color='orange'/>
      <Progress percent={13} color='yellow'/>
      <Progress percent={37} color='olive'/>
      <Progress percent={83} color='green'/>
      <Progress percent={23} color='teal'/>
      <Progress percent={85} color='blue'/>
      <Progress percent={38} color='violet'/>
      <Progress percent={47} color='purple'/>
      <Progress percent={29} color='pink'/>
      <Progress percent={68} color='brown'/>
      <Progress percent={36} color='grey'/>
      <Progress percent={72} color='black'/>
    </div>
    <br/>
    <br/>
    <div>
      <Progress percent={10} size='tiny'>
        tiny
      </Progress>
      <Progress percent={20} size='small'>
        small
      </Progress>
      <Progress percent={35} size='medium'>
        medium
      </Progress>
      <Progress percent={60} size='large'>
        large
      </Progress>
      <Progress percent={90} size='big'>
        big
      </Progress>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
)

export default ProgressExampleColor