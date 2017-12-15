import React from 'react'
import {Image} from 'semantic-ui-react'

const url = "https://react.semantic-ui.com/assets/images/wireframe/image.png";

const ImageExampleImage = () => (
  <div>
    <Image src={url} size='small'/>
    <br/>
    <br/>
    <Image
      src={url}
      as='a'
      size='medium'
      href='http://google.com'
      target='_blank'
    />
    <br/>
    <br/>

    <div>
      <Image src={url} avatar/>
      <span>Username</span>
    </div>
    <br/>
    <br/>
    <Image src={url} size='medium' bordered />
    <br/>
    <br/>
    <Image src={url} fluid />
    <br/>
    <br/>
    <Image src={url} size='medium' rounded />
    <br/>
    <br/>
    <Image src={url} size='small' circular />

  </div>
);

export default ImageExampleImage