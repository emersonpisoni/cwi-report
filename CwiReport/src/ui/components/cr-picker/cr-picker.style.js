import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions'

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  inputLabelContainer: {
    marginBottom: 10
  }, 
	picker: {
		height: 45, 
		width: WINDOW_WIDTH - 100, 
  },
	labelText: { 
		fontFamily: 'Montserrat-Medium', 
		fontSize: 18
	}
});
