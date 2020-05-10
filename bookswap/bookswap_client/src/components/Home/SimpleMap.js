import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//Based on https://github.com/google-map-react/google-map-react#rendering-in-a-modal

const AnyReactComponent = ({ text }) => <div class="circle">{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCBMXP0aZzf-ic_0t0EWEF0LCN2C5YbQAE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="A"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;