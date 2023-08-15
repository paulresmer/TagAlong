import { Component } from 'react';
import './Content.css';

class ContentData extends Component {
  render() {
    return (
      <div className='first-dest'>
        <div className='dest-text'>
          <h2>Some Place</h2>
          <p>lets go somewhere, so much text blah blah maybe add more stuff but right now i dont really know what to say so im just going to blabber to fill space
            more text i just need something here so i can see spacing and stuff
          </p>
        </div>

        <div className='image'>
          <img alt='img' src='src/assets/miffy-lamp.jpg' />
          <img alt='img' src='src/assets/miffy-lamp.jpg' />
        </div>
      </div>
    );
  }
}

export default ContentData;