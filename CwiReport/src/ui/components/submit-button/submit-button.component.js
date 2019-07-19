import React, { Component } from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { styles } from './submit-button.style';

export class SubmitButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.submitButtom}
        activeOpacity={0.8}
        onPress={this.props.onPress}
      >
        <Text style={styles.submitButtonText}>
          {this.props.buttonName}
        </Text>
      </TouchableOpacity>
    );
  }
}
