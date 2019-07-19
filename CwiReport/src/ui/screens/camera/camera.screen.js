import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { BaseScreen } from '@ui/screens'
import { Camera } from '@ui/components'

import { StorageService } from '@services'

import { styles } from './camera.style'
import { NEW_REPORT_ROUTES } from '../../navigator/routes/new-report';

export class CameraScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      cameraPermission: null,
      reportPic: ''
    }

    this.takePicture = this.takePicture.bind(this)
    this.onRef = this.onRef.bind(this)
  }

  onRef(reference) {
    this.crcamera = reference
  }

  takePicture() {
    this.crcamera.takePicture().then(data => {
      StorageService.setObject('reportPic', data.uri).then(
        this.props.navigation.navigate(NEW_REPORT_ROUTES.NEW_REPORT, { reportPic: data.uri })
      )
    })
  }

  renderCameraButton() {
    return (
      <TouchableOpacity
        style={styles.shotButton}
        activeOpacity={0.8}
        onPress={this.takePicture}
      />
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <Camera ref={this.onRef} />
        <View style={styles.controlsContainer}>
          {this.renderCameraButton()}
        </View>
      </View>
    )
  }
}
