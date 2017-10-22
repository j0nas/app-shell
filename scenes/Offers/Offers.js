import React from 'react';
import {Content, Text} from "native-base";
import Container from "../../components/general/Container/Container";

class Offers extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tilbud',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>List of all offers</Text>
        </Content>
      </Container>
    );
  }
}

export default Offers;