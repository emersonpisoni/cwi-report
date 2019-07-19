import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Permissions from 'react-native-permissions'

import { styles } from './camera.style';
import { SubmitButton } from '../submit-button/submit-button.component';

const CAMERA_PERMITION_TYPE = 'camera'
const MICROPHONE_PERMISSION_TYPE = 'microphone'

export class Camera extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cameraPermission: null,
            microphonePermission: null,
            pictures: []
        }

        this.onRef = this.onRef.bind(this)
        this.takePicture = this.takePicture.bind(this)
        this._requestPermissions = this._requestPermissions.bind(this)
        this._requestCameraPermission = this._requestCameraPermission.bind(this)
        this._requestMicrophonePermission = this._requestMicrophonePermission.bind(this)
        this._checkPermissions = this._checkPermissions.bind(this)
        this._hasPermission = this._hasPermission.bind(this)
    }

    componentDidMount() {
        this._requestPermissions()
    }

    _requestPermissions() {
        this._requestCameraPermission().then(this._requestMicrophonePermission)
    }

    _requestCameraPermission() {
        return Permissions.request(CAMERA_PERMITION_TYPE).then(response => {
            this.setState({ cameraPermission: response })
        })
    }

    _requestMicrophonePermission() {
        return Permissions.request(MICROPHONE_PERMISSION_TYPE).then(response => {
            this.setState({ microphonePermission: response })
        })
    }

    _checkPermissions() {
        const permitionsToCheck = [CAMERA_PERMITION_TYPE, MICROPHONE_PERMISSION_TYPE]

        Permissions.checkMultiple(permitionsToCheck).then(({ camera, microphone }) => {
            this.setState({
                cameraPermission: camera,
                microphonePermission: microphone
            })
        })
    }

    _hasPermission() {
        const { cameraPermission, microphonePermission } = this.state

        return cameraPermission === 'authorized' && microphonePermission === 'authorized'
    }

    onRef(reference) {
        this.camera = reference
    }

    async takePicture() {
        if (this.camera && this._hasPermission()) {
            const options = { base64: true, pauseAfterCapture: true }
            const data = await this.camera.takePictureAsync(options)

            this.camera.resumePreview()

            return data
        }
    }

    renderCamera() {
        return (
            <View style={styles.camera.container}>
                <RNCamera
                    style={styles.camera.rnCamera}
                    ref={this.onRef}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    autoFocus={RNCamera.Constants.AutoFocus.off}
                    type={RNCamera.Constants.Type.back}
                />
            </View>
        )
    }

    renderPermissionRequest() {
        return (
            <View style={styles.permissionRequest.container}>
                <Text style={styles.permissionRequest.title}>
                    Precisamos de permissão para acessar sua câmera e seu microfone!
                </Text>
                <SubmitButton buttonName='PERMTIR' onPress={this._requestPermissions} />
            </View>
        )
    }

    render() {
        return !!this._hasPermission() ? this.renderCamera() : this.renderPermissionRequest()
    }
}
