import React from 'react';
import {Content, Icon, Text} from "native-base";
import Container from "../../components/general/Container/Container";

class Products extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Produkter',
    tabBarIcon: () => <Icon name='Basket'/>,
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>List of all products</Text>
        </Content>
      </Container>
    )
  };
}

export default Products;