import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
// import { AppEventsLogger } from 'react-native-fbsdk';

import HomeScreen from './components/HomeScreen';
import PosterConfigScreen from './components/PosterConfigScreen';
import PosterListScreen from './components/PosterListScreen';
import PosterConfirmationScreen from './components/PosterConfirmationScreen';
import CheckoutScreen from './components/CheckoutScreen';

export default class Posterific extends Component {

  renderScene(route, navigator) {
    if (route.name === 'Home') {
      // AppEventsLogger.logEvent("pageVisit", {"pageName":"Home"});
      return <HomeScreen navigator={navigator} />
    }
    if (route.name === 'PosterList') {
      // AppEventsLogger.logEvent("pageVisit", {"pageName":"PosterList"});
      return <PosterListScreen navigator={navigator} />
    }
    if (route.name === 'PosterConfig') {
      // AppEventsLogger.logEvent("pageVisit", {"pageName":"PosterConfig"});
      return <PosterConfigScreen navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'PosterConfirmation') {
      // AppEventsLogger.logEvent("pageVisit", {"pageName":"PosterConfirmation"});
      return <PosterConfirmationScreen navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'Checkout') {
      // AppEventsLogger.logEvent("pageVisit", {"pageName":"Checkout"});
      return <CheckoutScreen navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Home' }}
        renderScene={this.renderScene}
      />
    )
  }
}

AppRegistry.registerComponent('posterific', () => Posterific);
