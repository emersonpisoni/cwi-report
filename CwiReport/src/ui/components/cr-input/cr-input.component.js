import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';

import { styles } from './cr-input.style';

export class CrInput extends Component {
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
      <View style={styles.inputLabelContainer}>
        <Text style={styles.labelText}>{this.props.labelName}</Text>
        <TextInput
          ref='textInput'
          style={[styles.textInput, this.state.focus ? styles.orangeBorder : this.state.invalid ? styles.redBorder : {}]}
          placeholder={this.state.focus ? '' : this.state.invalid ? 'Campo obrigatório' : ''}
          placeholderTextColor='red'
          onFocus={() => this._changeFocus(this.refs.textInput._lastNativeText)}
          onBlur={() => this._changeFocus(this.refs.textInput._lastNativeText)}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          secureTextEntry={this.props.password || false}
        />
      </View>
    );
  }
}
