import React from 'react';
import PropTypes from 'prop-types';
import {Button, FooterTab as NativeBaseFooterTab, Icon, Text} from 'native-base';

const FooterTab = ({ iconName, text, active, onPress }) =>
  <NativeBaseFooterTab>
    <Button title={text} active={active} onPress={onPress}>
      <Icon name={iconName}/>
      <Text>{text}</Text>
    </Button>
  </NativeBaseFooterTab>;

FooterTab.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default FooterTab;