import React from 'react'
import {Icon, Image, Statistic} from 'semantic-ui-react'

const StatisticExampleValue = () => (
  <div>
    <div>
      <Statistic.Group>
        <Statistic>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Saves</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value text>
            Three<br/>
            Thousand
          </Statistic.Value>
          <Statistic.Label>Signups</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name='plane'/>
            5
          </Statistic.Value>
          <Statistic.Label>Flights</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Image src={"https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg"} inline circular/>
            42
          </Statistic.Value>
          <Statistic.Label>Team Members</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
    <div>
      <Statistic.Group>
        <Statistic color='red'>
          <Statistic.Value>27</Statistic.Value>
          <Statistic.Label>red</Statistic.Label>
        </Statistic>
        <Statistic color='orange'>
          <Statistic.Value>8'</Statistic.Value>
          <Statistic.Label>orange</Statistic.Label>
        </Statistic>
        <Statistic color='yellow'>
          <Statistic.Value>28</Statistic.Value>
          <Statistic.Label>yellow</Statistic.Label>
        </Statistic>
        <Statistic color='olive'>
          <Statistic.Value>7'</Statistic.Value>
          <Statistic.Label>olive</Statistic.Label>
        </Statistic>
        <Statistic color='green'>
          <Statistic.Value>14</Statistic.Value>
          <Statistic.Label>green</Statistic.Label>
        </Statistic>
        <Statistic color='teal'>
          <Statistic.Value>82</Statistic.Value>
          <Statistic.Label>teal</Statistic.Label>
        </Statistic>
        <Statistic color='blue'>
          <Statistic.Value>1'</Statistic.Value>
          <Statistic.Label>blue</Statistic.Label>
        </Statistic>
        <Statistic color='violet'>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>violet</Statistic.Label>
        </Statistic>
        <Statistic color='purple'>
          <Statistic.Value>23</Statistic.Value>
          <Statistic.Label>purple</Statistic.Label>
        </Statistic>
        <Statistic color='pink'>
          <Statistic.Value>15</Statistic.Value>
          <Statistic.Label>pink</Statistic.Label>
        </Statistic>
        <Statistic color='brown'>
          <Statistic.Value>36</Statistic.Value>
          <Statistic.Label>brown</Statistic.Label>
        </Statistic>
        <Statistic color='grey'>
          <Statistic.Value>49</Statistic.Value>
          <Statistic.Label>grey</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
    <div>
      <Statistic.Group widths='four'>
        <Statistic>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Saves</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value text>
            Three
            <br/>Thousand
          </Statistic.Value>
          <Statistic.Label>Signups</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name='plane'/>
            5
          </Statistic.Value>
          <Statistic.Label>Flights</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Image src={"https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg"} className='circular inline'/>
            42
          </Statistic.Value>
          <Statistic.Label>Team Members</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  </div>
);

export default StatisticExampleValue