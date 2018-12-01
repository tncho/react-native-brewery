import React, { Component } from 'react';
import { Text, StyleSheet, Keyboard, View } from 'react-native';
import { Container, Content, DeckSwiper, Spinner } from 'native-base';
import SearchHeaderComponent from './../SearchHeader';
import BeerCard from '../BeerCard';
import axios from 'axios';

class SearchTabComponent extends Component {
  state = {
    searchBeer: '',
    beerFound: false,
    beerData: [],
    loading: false
  };

  static navigationOptions = {
    header: null
  };

  beerSearch = () => {
    Keyboard.dismiss();
    const beerName = this.state.searchBeer.toLowerCase();
    const endpoint = 'https://api.punkapi.com/v2/beers';

    const searchByNameQuery = `${endpoint}?beer_name=${beerName}`;
    const vm = this;
    vm.setState({
      loading: true
    }, () => {
    axios
      .get(searchByNameQuery)
      .then(({ data: beers }) => {
        if (beers) {
          vm.setState({
            beerData: beers,
            beerFound: true,
            loading: false
          });
        }
        console.log(vm.state.beerData);
      })
      .catch(err => {
        vm.setState({
          beerFound: false,
          loading: false
        });
      });
    })
  };

  renderContent = () => {
    if (this.state.beerFound) {
      return <DeckSwiper
        dataSource={this.state.beerData}
        renderItem={item =>
          <BeerCard beerData={item}/>
        }
      />
    } else {
      console.log('beer not found');
      return <Text>No results</Text>
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <SearchHeaderComponent
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <View>
            { loading ? <Spinner color='blue' /> : this.renderContent() }
        </View>
      </Container>
    );
  }
}

export default SearchTabComponent;
