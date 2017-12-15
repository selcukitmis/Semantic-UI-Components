import React from 'react'
import {Embed} from 'semantic-ui-react'

const EmbedExampleYouTube = () => (
  <div>
    <Embed
      id='O6Xo21L0ybE'
      placeholder='/assets/images/image-16by9.png'
      source='youtube'
    />
    <Embed
      id='125292332'
      placeholder='/assets/images/vimeo-example.jpg'
      source='vimeo'
    />
    <Embed
      icon='right circle arrow'
      placeholder='/assets/images/image-16by9.png'
      url='http://www.myfav.es/jack'
    />
  </div>
);

export default EmbedExampleYouTube
