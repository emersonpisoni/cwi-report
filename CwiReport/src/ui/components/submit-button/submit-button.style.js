import Dimensions from 'Dimensions'
import { StyleSheet } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  submitButtom: { 
		height: 50, 
		width: WINDOW_WIDTH - 100, 
		backgroundColor: '#FBB040', 
		borderRadius: 5, 
		marginVertical: 20, 
		justifyContent: 'center', 
		alignItems: 'center' 
  },
  submitButtonText: {
		color: 'white',
		fontFamily: 'Montserrat-Medium',
		fontSize: 16
	}
});
