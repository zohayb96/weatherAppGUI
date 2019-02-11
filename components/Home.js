import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      day: '',
    };
  }

  render() {
    return <Text>Hello World</Text>;
  }
}
