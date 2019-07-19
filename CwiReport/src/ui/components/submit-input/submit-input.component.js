import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { CrIcon } from '../index'

import { styles } from './submit-input.style';

export class SubmitInput extends Component {
  constructor() {
    super()
    this.state = {
      focus: false,
      invalid: false
    }
  }

  _changeFocus(value) {
    this.setState(
      {
        focus: !this.state.focus
      }
    )

    this.setState({
      invalid: !value ? true : false
    })
  }

  render() {
    return (
      <View
        style={styles.inputLabelContainer}
      >
        <Text
          style={styles.labelText}
        >
          {this.props.labelName}
        </Text>
        <TextInput
          ref='tagInput'
          style={[styles.textInput, this.state.focus ? styles.orangeBorder : this.state.invalid ? styles.redBorder : {}]}
          placeholder={this.state.focus ? '' : this.state.invalid ? 'Campo obrigatório' : ''}
          placeholderTextColor='red'
          onFocus={() => this._changeFocus(this.refs.tagInput._lastNativeText)}
          onBlur={() => this._changeFocus(this.refs.tagInput._lastNativeText)}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          name={this.props.name}
        />
        <TouchableOpacity
          style={styles.sendTagButton}
          onPress={this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}
