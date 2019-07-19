import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './image-input.style';

export class ImageInput extends Component {
  render() {
    return (
      <View style={styles.inputLabelContainer}>
        <Text style={styles.labelText}>{this.props.labelName}</Text>
        <TouchableOpacity 
          style={styles.imageInput}
          activeOpacity={0.8}
          onPress={this.props.onPress}
        >
          {this.props.image ? <Image source={{ uri: this.props.image }} style={styles.reportImage} /> : null}
        </TouchableOpacity>
      </View >
    );
  }
}
