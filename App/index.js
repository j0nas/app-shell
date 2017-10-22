import React from "react";
import { Provider } from 'react-redux';
import {AppLoading} from "expo";
import Router from "../scenes/Router";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    return !this.state.isReady ? <AppLoading/> : <Router/>;

  }
}
export default App;