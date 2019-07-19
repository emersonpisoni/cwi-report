import React, { Component, Fragment } from 'react';

import { StorageService } from '@services'

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { CrIcon } from '../'

import styles from './report-item.style';

export class ReportItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textLines: false,
      fontSize: '',
      height: true,
      showOptions: false,
      loggedUserPermission: ''
    }
  }

  componentDidMount() {
    StorageService.getObject('loggedUser').then(user => {
      this.setState({
        loggedUserPermission: user.permission
      })
    })
  }


  _handleChanger = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  toggle = (height) => {
    this.setState({ height: !height })
  }

  _renderButtonOption = (title, status, id) => (
    <TouchableOpacity style={styles.buttonOption} onPress={() => this.props.onChangeStatus(status, id)}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  )

  render() {
    const { userImage, owner, floor, description, image, admin = true, status, id } = this.props
    const { height, showOptions } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View >
            <Image style={styles.userImage} source={userImage ? { uri: userImage } : { uri: 'https://image.flaticon.com/icons/png/512/17/17004.png' }}></Image>
          </View>
          <View>
            <Text style={styles.usernameText} >{owner}</Text>
            <Text>{floor} {floor === 'Térreo' ? null : 'andar'}</Text>
            <Text style={styles.dataText} >30-03-2019 11:36</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', height: 200 }}>
          <Image style={styles.reportImage} source={{ uri: image }} />
          <Text style={{ fontWeight: '700', position: 'absolute', right: 0, top: 0, paddingHorizontal: 15, paddingVertical: 2, borderBottomLeftRadius: 20, color: status === 'concluido' ? 'white' : 'black', backgroundColor: status === 'concluido' ? 'green' : 'yellow' }} >
            {status === 'pendente' ? 'Pendente' : null}
            {status === 'andamento' ? 'Em andamento' : null}
            {status === 'concluido' ? 'Resolvido' : null}
          </Text>
        </View>
        <View style={styles.describeContainer} >
          <Text onPress={() => this.toggle(height)} numberOfLines={height ? 5 : null}>
            {description}
          </Text>
        </View>
        {
          this.state.loggedUserPermission == 'admin' && status != 'concluido' ?
          <View style={{ position: 'absolute', top: 20, right: 20 }} >
            <TouchableOpacity style={styles.options} onPress={() => this._handleChanger('showOptions', !showOptions)} >
              <CrIcon name='settings-dots' style={{ fontSize: 20 }} />
            </TouchableOpacity>
            {
              showOptions ?
                <View style={styles.buttonOptionContainer
                } >
                  {
                    status === 'pendente' ?
                      <Fragment>
                        {this._renderButtonOption('Analisar', 'andamento')}
                        {this._renderButtonOption('Resolver', 'concluido')}
                      </Fragment> :
                      null
                  }
                  {status === 'andamento' ? this._renderButtonOption('Resolver', 'concluido') : null}
                </View > : null
            }
          </View >: 
          null

        }
      </View>
    )
  }
}
