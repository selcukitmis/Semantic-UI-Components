import React, {Component} from 'react';
import { Checkbox } from 'semantic-ui-react'

export default class Radios extends Component {
  render() {
    return (
      <div>
        <Checkbox label='Make my profile visible' defaultChecked />
        <br />
        <br />
        <Checkbox label='Make my profile visible' toggle defaultChecked />
        <br />
        <br />
        <Checkbox label='Make my profile visible' slider defaultChecked />
      </div>
    );
  }
}
