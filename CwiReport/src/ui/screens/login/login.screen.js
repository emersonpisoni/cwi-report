import React from 'react'

import {
	View,
	Text,
	Image
} from 'react-native'

import { NavigationActions, StackActions } from 'react-navigation'

import { BaseScreen } from '../base/base.screen'

import { CrInput, SubmitButton } from '@ui/components'

import { StorageService } from '../../../services'

import { styles } from './login.style'

import { LoginService } from '../../../services/login/login.service'

export class LoginScreen extends BaseScreen {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super()
		this.state = {
			user: '',
			password: '',
			initialUsers: []
		}
		this.loginService = new LoginService()
	}

	handleChanger(name, value) {
		this.setState({
			[name]: value
		})
	}

	onLoginPress = () => {
		this.loginService.getUsers().then(users => {
			const loggedUser = users.filter(user => user.user == this.state.user && user.password == this.state.password)
			if (loggedUser.length) {
				StorageService.setObject('loggedUser', {
					permission: loggedUser[0].permission,
					userImage: loggedUser[0].userImage,
					login: loggedUser[0].user,
					fullName: loggedUser[0].fullName
				})
				this.props.navigation.dispatch(
					StackActions.reset({
						 index: 0,
						 actions: [
							NavigationActions.navigate({
								routeName: 'RootTabBar'
							})
						 ]
					 }));
			} else {
				alert("Usuário ou senha incorretos, tente novamente!")
			}
		})
	}

	renderContent() {
		return (
			<View style={styles.container}>
				<Image style={styles.logo}
					source={require('@assets/images/logo-cwi.jpg')}
				/>
				<Text style={styles.pageTitle}>Cwi Report</Text>
				<CrInput labelName='Usuario' onChangeText={(value) => this.handleChanger('user', value)} value={this.state.user} />
				<CrInput labelName='Senha' onChangeText={(value) => this.handleChanger('password', value)} value={this.state.password} password={true}/>
				<SubmitButton buttonName="LOGIN" onPress={this.onLoginPress} />
			</View>
		)
	}

}
