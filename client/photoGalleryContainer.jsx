import React from 'react';
import "whatwg-fetch";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class PhotoGalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      __html: ""
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3003/proxy`)
      .then(resp => {
        return resp.text();
      })
      .then(content => {
        this.setState({
          __html: content
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const html = this.state.__html;
    console.log(html, typeof html);
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}

export default PhotoGalleryContainer;