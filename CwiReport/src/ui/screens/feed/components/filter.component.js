import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

// import * as Animatable from 'react-native-animatable';

import { CrIcon } from '../../../components/cr-icon/cr-icon.component'

import { styles } from './filter.style';
import { TextInput } from 'react-native-gesture-handler';
import { SubmitInput } from '../../../components';

export class Filter extends Component {

  constructor() {
    super()
    this.state = {
      concluido: false,
      andamento: false,
      pendente: false,
      showFilter: false,
      showSearchInput: false,
      searchedTag: ''
    }
  }

  _handleChanger = (name, value) => {
    this.setState({
      [name]: !value
    }, () => {
      let filtrosAtivos = Object.keys(this.state)
        .filter(key => ["concluido", "andamento", "pendente"].includes(key) && this.state[key])
      this.props.onFilterChange(filtrosAtivos);
    })
  }

  _changeFilterIcon = () => { this.setState({ showFilter: !this.state.showFilter, showSearchInput: false }) }

  _changeSearchIcon = () => { this.setState({ showSearchInput: !this.state.showSearchInput, showFilter: false }) }

  _renderFilterOptions = () => {
    const { concluido, andamento, pendente } = this.state

    return (
      <View style={styles.filterOptions}>
        <TouchableOpacity onPress={() => this._handleChanger('concluido', concluido)} style={[styles.status]}>
          <Text style={[styles.text, !concluido && styles.black, concluido ? styles.textChecked : null]}>Concluídas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._handleChanger('andamento', andamento)} style={[styles.status]}>
          <Text style={[styles.text, !andamento && styles.black, andamento ? styles.textChecked : null]}>Em andamento</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._handleChanger('pendente', pendente)} style={[styles.status]}>
          <Text style={[styles.text, !pendente && styles.black, pendente ? styles.textChecked : null]}>Pendentes</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderSearchInput = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <SubmitInput
          onPress={this.props.onSearchInputPress}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        >
          <CrIcon name='search' style={{ fontSize: 25 }} />
        </SubmitInput>
      </View>
    )
  }

  _renderIcon = () => {
    return (
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.touchContainer} onPress={this._changeFilterIcon} >
          <CrIcon name='filter' style={[styles.icon, this.state.showFilter ? styles.orangeFilter : null]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._changeSearchIcon} >
          <CrIcon name='search' style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { showFilter, showSearchInput } = this.state
    return (
      <View style={styles.container}>
        {this._renderIcon()}
        {showFilter ? this._renderFilterOptions() : null}
        {showSearchInput ? this._renderSearchInput() : null}
      </View>
    )
  }
}
