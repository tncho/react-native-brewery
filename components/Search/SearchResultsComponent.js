import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import { Content, ListItem, List } from 'native-base';

class SearchResultsComponent extends Component {
  render() {
    const { beerData } = this.props;
    return (
      <Content>
        <ListItem itemDivider style={{ justifyContent: 'center' }}>
          <Image
            source={{ uri: beerData.image_url }}
            style={{ height: 200, width: 200 }}
          />
        </ListItem>
        <List style={{ backgroundColor: 'white' }}>
          <ListItem itemDivider>
            <Text>Name</Text>
          </ListItem>
          <ListItem style={{ justifyContent: 'space-between' }}>
            <View>
              <Text>{beerData.name}</Text>
            </View>
            <View>
              <Button
                onPress={() => this.addToFavorites(beerData.name)}
                title="+Favorites"
              />
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Text>Category</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.tagline}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Description</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.description}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Rating</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.abv}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Quantity</Text>
          </ListItem>
          <ListItem>
            <Text>
              {beerData.volume.value} {beerData.volume.unit}
            </Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Observations</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.method.twist}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default SearchResultsComponent;
