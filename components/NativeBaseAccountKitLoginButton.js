import React, { Component } from 'react';
import { Button } from 'native-base';
import { LoginButton } from 'react-native-facebook-account-kit';

export default class NativeBaseAccountKitLoginButton extends LoginButton {

  render() {
    return (
      <Button
        info
        iconRight
        block
        rounded
        style={this.props.style}
        onPress={() => { super.onPress() }}
      >
        {this.props.children}
      </Button>
    )
  }

}
