/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Root from './src/main'

export default class TaxiAppAndroid extends Component {
  render() {
    return (
      <Root {...this.props}/>
    );
  }
}


AppRegistry.registerComponent('TaxiAppAndroid', () => TaxiAppAndroid);
