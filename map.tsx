import * as React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>;

export class Map extends Component<any, any> {
  static defaultProps = {
    center: {lat: 43.6532, lng: -79.3832},
    zoom: -10
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={""}
        />
      </GoogleMapReact>
    );
  }
}
