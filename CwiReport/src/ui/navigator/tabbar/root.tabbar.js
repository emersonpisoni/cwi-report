import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import { NewReportStack } from '@ui/navigator/stacks/new-report/new-report.stack.js'
import { FeedStack } from '@ui/navigator/stacks/feed/feed.stack.js'

import { Text, View } from 'react-native'
import { CrIcon } from '@ui/components'


export const RootTabBar = createBottomTabNavigator(
	{
		FeedStack: {
			screen: FeedStack
		},
		NewReportStack: {
			screen: NewReportStack
		}
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				if (routeName === 'NewReportStack') {
					iconName = 'plus-with-circle'
				} else if (routeName === 'FeedStack') {
					iconName = 'home'
				}

				return <View style={{ paddingTop: 10 }}><CrIcon name={iconName} style={{ fontSize: 30, color: tintColor }} /></View>
			},
			tabBarLabel: ({ tintColor }) => {
				const { routeName } = navigation.state
				let labelName

				if (routeName === 'NewReportStack') {
					labelName = 'Novo Report'
				} else if (routeName === 'FeedStack') {
					labelName = 'Feed'
				}

				return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}><Text style={{ color: tintColor }} >{labelName}</Text></View>
			},
		}),
		tabBarOptions : {
			activeTintColor: 'orange'
		}
	}
)