import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Container as NativeBaseContainer} from "native-base";
import {Constants} from "expo";

const Container = ({children}) =>
  <NativeBaseContainer style={styles.container}>
    {children}
  </NativeBaseContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});


export default Container;