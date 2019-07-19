import Dimensions from 'Dimensions'
import { StyleSheet } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 10
	},
	tagsContainer: { 
		flexDirection: 'row',
		maxWidth: WINDOW_WIDTH - 100,
		flexWrap: 'wrap'
	},
	tag: { 
		backgroundColor: '#FBB040', 
		padding: 5, color: 'white', 
		margin: 5, 
		borderRadius: 5 
	}
});
