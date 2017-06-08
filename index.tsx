import * as React from 'react';
import {render} from 'react-dom';

class App extends React.Component<any, any> {
  render () {
    return <p> Hohoho </p>;
  }
}

render(<App/>, document.getElementById('my-app'));