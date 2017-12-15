import React, {Component} from 'react';
import {Rating} from 'semantic-ui-react'

export default class Ratings extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })
  render() {
    return (
      <div>
        <Rating icon='star' defaultRating={3} maxRating={10}/>
        <br/><br/>
        <Rating icon='heart' defaultRating={1} maxRating={3}/>
        <br/><br/>
        <Rating maxRating={5} clearable />
        <br/><br/>
        <div>
          <Rating maxRating={5} onRate={this.handleRate} />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
        <br/><br/>
        <div>
          <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' size='tiny' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' size='small' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' size='large' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
          <br />
          <br />

          <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
          <br />
          <br />
        </div>
        <br/><br/>

      </div>
    );
  }
}
