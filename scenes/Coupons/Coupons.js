import React from 'react';
import {Content, Text} from "native-base";
import Container from "../../components/general/Container/Container";

class Coupons extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Kuponger',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>List of all coupons</Text>
        </Content>
      </Container>
    );
  }
}

export default Coupons;