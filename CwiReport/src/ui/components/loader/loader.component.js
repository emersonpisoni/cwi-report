import React, { Component } from 'react';

import { Text, Dimensions, View, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window')

export class Loader extends Component {
  render() {
    return (
      <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: '#00000070', zIndex: 999999999 }}>
        <ActivityIndicator size="large" color="#FBB040" />
      </View>
    )
  }
}
