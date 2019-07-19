import React, { Component, Fragment } from 'react';

import {
	View,
	ScrollView,
	Text
} from 'react-native';

import {
	SubmitButton,
	ImageInput,
	TextArea,
	CrInput,
	CrPicker
} from '@ui/components'

import { BaseScreen } from '../base/base.screen'

import { StorageService } from '@services'

import { SubmitInput, CrIcon, Loader } from '@ui/components'

import { styles } from './new-report.style';

import { NEW_REPORT_ROUTES } from '../../navigator/routes/new-report';

export class NewReportScreen extends BaseScreen {
	static navigationOptions = {
		title: 'Novo Report',
		headerTitleStyle: {
			textAlign: "center",
			flex: 1
		}
	}

	constructor() {
		super()

		this.state = {
			reportTags: [],
			inputedTag: '',
			reportPic: '',
			title: '',
			floor: '',
			description: '',
			status: 'pendente',
			isLoading: false
		}

		this.pickerLabels = [
			{
				label: "Térreo",
				value: 1,
			},
			{
				label: "2",
				value: 2,
			},
			{
				label: "3",
				value: 3,
			},
			{
				label: "4",
				value: 4,
			},
			{
				label: "5",
				value: 5,
			},
			{
				label: "6",
				value: 6,
			}
		]
	}

	screenDidFocus() {
		if (this.props.navigation.state.params) {
			this.setState({
				reportPic: this.props.navigation.state.params.reportPic
			})
		}
	}

	_toggleLoading() {
		this.setState({ isLoading: !this.state.isLoading })
	  }

	_onTagInputPress = () => {
		if (this.state.inputedTag) {
			this.setState({
				reportTags: [...this.state.reportTags, this.state.inputedTag],
				inputedTag: ''
			})
		}
	}

	_handleChanger(name, value) {
		this.setState({
			[name]: value
		})
	}

	_goToCamera = () => {
		this.props.navigation.navigate(NEW_REPORT_ROUTES.CAMERA, {
			title: 'Camera'
		})
	}

	_onReportSave = () => {
		this._toggleLoading()
		let attReports = []
		StorageService.getObject('loggedUser').then(user => {
			const { reportTags: tags, reportPic: image, title, floor, description, status } = this.state

			const report = {
				owner: user.fullName,
				tags,
				image,
				title,
				floor,
				description,
				status,
				userImage: user.userImage
			}

			StorageService.getObject('reports').then(reports => {
				attReports = [report, ...reports]

				StorageService.setObject('reports', attReports)
				this._toggleLoading()
				alert('Report cadastrado com sucesso')
			})

			this.setState({
				reportTags: [],
				inputedTag: '',
				reportPic: '',
				title: '',
				floor: '',
				description: ''
			})
		})
	}

	renderContent() {
		return (
			<Fragment>
				{this.state.isLoading ? <Loader /> : null}
				<View
					style={styles.formContainer}
				>
					<ScrollView
						showsVerticalScrollIndicator={false}
					>
						<CrInput
							labelName="Título"
							onChangeText={(value) => this._handleChanger('title', value)}
							value={this.state.title}
						/>
						<CrPicker
							pickerItems={this.pickerLabels}
							pickerTitle="Andar"
							onValueChange={(value) => this._handleChanger('floor', value)}
							value={this.state.floor}
						/>
						<TextArea
							labelName="Descrição"
							onChangeText={(value) => this._handleChanger('description', value)}
							value={this.state.description}
						/>
						<SubmitInput
							onPress={this._onTagInputPress}
							onChangeText={(value) => this._handleChanger('inputedTag', value)}
							value={this.state.inputedTag}
							labelName='Tags'
						>
							<CrIcon name='confirm' style={{ fontSize: 25 }} />
						</SubmitInput>
						<View
							style={styles.tagsContainer}
						>
							{
								this.state.reportTags.map((tag, key) => (
									<Text
										style={styles.tag}
										key={key}
									>
										{tag}
									</Text>
								))
							}
						</View>
						<ImageInput
							labelName="Imagem"
							onPress={this._goToCamera}
							image={this.state.reportPic}
						/>
						<SubmitButton
							buttonName="ENVIAR"
							onPress={this.state.reportPic && this.state.floor ? this._onReportSave : () => alert('Por favor, tire uma foto da ocorrência e informe o andar')}
						/>
					</ScrollView>
				</View>
			</Fragment>
		);
	}
}
