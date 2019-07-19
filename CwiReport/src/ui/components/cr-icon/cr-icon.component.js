import React, { Component } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../../../assets/fonts/selection.json'

const Icon = createIconSetFromIcoMoon( icoMoonConfig, 'cricons', 'cricons.ttf')

export class CrIcon extends Component {
    render() {
        const { name, style } = this.props

        return <Icon name={name} style={style}/>
    }
}
