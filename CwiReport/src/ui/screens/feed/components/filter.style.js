import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: DEVICE_WIDTH,
	},
	iconsContainer: {
		flexDirection: 'row',
		width: DEVICE_WIDTH,
		justifyContent: 'space-around'
	},	
	filterOptions: {
		flexDirection: 'row',
		width: DEVICE_WIDTH
	},
	status: {
		flex: 2,
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomLeftRadius: 0
	},
	textChecked: {
		color: '#FBB040',
		fontWeight: '600'
	},
	text: {
		fontFamily: 'Montserrat-Regular',
		fontWeight: '400'
	},
	white: {
		color: 'black'
	},
	icon: {
		padding: 10,
		fontSize: 25,
		color: 'black'
	},
	orangeFilter: {
		color: '#FBB040'
	}
});