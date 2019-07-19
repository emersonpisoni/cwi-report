import React, { Component } from 'react';

import { View, Text, Picker } from 'react-native';

import { styles } from './cr-picker.style';

export class CrPicker extends Component {
  render() {
    return (
      <View style={styles.inputLabelContainer}>
        <Text style={styles.labelText}>{this.props.pickerTitle}</Text>
        <Picker 
          style={styles.picker} 
          itemStyle={{ fontFamily: 'Montserrat-Regular' }}
          onValueChange={this.props.onValueChange}
          selectedValue={this.props.value}
        >
          {this.props.pickerItems.map((item, key) => (
            <Picker.Item label={item.label} value={item.value} key={key}/>
          ))}
        </Picker>
      </View>
    );
  }
}
