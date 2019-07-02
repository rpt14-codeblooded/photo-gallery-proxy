import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './photoGalleryContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div><PhotoGallery/>
        <div>test</div>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));