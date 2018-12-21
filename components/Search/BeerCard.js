import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Text, Button, Icon, Left, Right, Body } from 'native-base';

const addToFavorites = (name) => alert(`Beer: ${ name } - TODO: Add to Favorite`)

class BeerCard extends Component {
  render() {
    const { beerData } = this.props;
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{ beerData.name }</Text>
                <Text note>{ `Category: ${beerData.tagline}` }</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image 
              source={{uri: beerData.image_url }} 
              style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
                <Icon active name="star" />
                <Text>{ beerData.abv }</Text>
            </Left>
            <Right>
              <Button transparent
                  onPress={() => addToFavorites(beerData.name)}>
                  <Icon active name="bookmark"/>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default BeerCard;
