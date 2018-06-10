import React, { Component } from 'react';
import { Text, StyleSheet, Keyboard, View } from 'react-native';
import { Container, Content } from 'native-base';
import SearchHeaderComponent from './../SearchHeader';
import SearchResultsComponent from '../SearchResultsComponent';
import axios from 'axios';

class SearchTabComponent extends Component {
  state = {
    searchBeer: '',
    beerFound: false,
    beerData: {}
  };

  static navigationOptions = {
    header: null
  };

  beerSearch = () => {
    Keyboard.dismiss();
    const beerName = this.state.searchBeer.toLowerCase();
    const endpoint = 'https://api.punkapi.com/v2/beers';

    const searchByNameQuery = `${endpoint}?beer_name=${beerName}`;

    axios
      .get(searchByNameQuery)
      .then(({ data: beers }) => {
        if (beers) {
          this.setState({
            beerData: beers[0],
            beerFound: true
          });
        }
        console.log(this.state.beerData);
      })
      .catch(err => {
        this.setState({
          beerFound: false
        });
      });
  };

  renderContent = () => {
    if (this.state.beerFound) {
      return <SearchResultsComponent beerData={this.state.beerData}/>
    } else {
      console.log('beer not found');
    }
  };

  render() {
    return (
      <Container>
        <SearchHeaderComponent
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <Content>
          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}

export default SearchTabComponent;
