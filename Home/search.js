import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';

export class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
    console.log(this.state.search);
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Any question ? "
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}