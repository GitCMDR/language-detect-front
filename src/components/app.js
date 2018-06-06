import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import TextList from '../containers/text_list';

export default class App extends Component {
  render() {
    return (<div>
      <SearchBar />
        <TextList/>
        </div>
    );
  }
}
