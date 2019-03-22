
import React            from 'react';
import axios            from 'axios';
import Photo from '../Photo/index.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const context = this;
    axios.get('/pictures/all')
    .then((images) => {
      console.log(images);
      context.setState({
        images: images.data,
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    let { images } = this.state;
    images = images ? images : [];

    return (
      <div>
        <h1> Dashboard </h1>
        <Photo/>
        { images.map((image) => <Photo photo={image}/>) }
     </div>
    )
  }
}

module.exports = Dashboard;