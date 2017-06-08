import * as React from 'react';
import {render} from 'react-dom';
import {Map} from './map';

class App extends React.Component<any, any> {
  render () {
    return <Map/>;
  }
}

render(<App/>, document.getElementById('my-app'));