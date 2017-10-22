import React from 'react';
import {Content, Text} from "native-base";
import Container from "../../components/general/Container/Container";

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profil',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>My profile</Text>
        </Content>
      </Container>
    );
  }
}

export default Profile;