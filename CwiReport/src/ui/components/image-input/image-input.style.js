import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions'

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  inputLabelContainer: {
		marginBottom: 10
	},
	labelText: { 
		fontFamily: 'Montserrat-Medium', 
		fontSize: 18
	}, 
	imageInput: { 
		borderColor: 'gray', 
		borderWidth: 2,
		height: WINDOW_WIDTH - 100,
		width: WINDOW_WIDTH - 100,
		borderRadius: 5,
		borderStyle: 'dashed'
	},
	reportImage: {
		flex: 1,
		borderRadius: 5
	}
});
