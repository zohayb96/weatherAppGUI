import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './components/Home';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: `WeatherApp`,
    }),
  },
});

export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}
