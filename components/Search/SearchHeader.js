import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

class SearchHeaderComponent extends Component {
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input 
            placeholder="Type a beer name.."
            returnKeyType="search"
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.beerSearch}/>
        </Item>
      </Header>
    );
  }
}

export default SearchHeaderComponent;
