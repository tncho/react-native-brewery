import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from './components/Home/HomeComponent';
import SearchComponent from './components/Search/SearchComponent'; 

const App = createStackNavigator({
  HomeScreen: { screen: HomeComponent },
  SearchTabNavigator: { screen: SearchComponent },
});

export default App;