import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Attributes from './Attributes';
import Categories from './Categories';
import CategoriesAddEdit from './CategoriesAddEdit';
import Checkoutfields from './Checkoutfields';
import Countries from './Countries';
import './bootstrap.css';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Countries />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
