import Dimensions from 'Dimensions'
import { StyleSheet } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  inputLabelContainer: {
    marginBottom: 10
  },
  labelText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18
  },
  textInput: {
    height: 45,
    width: WINDOW_WIDTH - 100,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gray',
    fontFamily: 'Montserrat-Regular',
    color: 'black'
  },
  orangeBorder: {
    borderColor: '#FBB040'
  },
  sendTagButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  redBorder: {
    borderColor: 'red'
  }
});
