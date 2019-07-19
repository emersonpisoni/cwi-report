import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
    zIndex: 20,
    borderRadius: 15,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 10,
  },
  header: {
    height: 'auto',
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    padding: 10
  },
  buttonOptionContainer: { 
    position: 'absolute', 
    top: 20, 
    right: 0, 
    alignItems: 'center', 
    shadowColor: "green", 
    shadowOpacity: 1, 
    shadowRadius: 5, 
    elevation: 10, 
    backgroundColor: 'white' 
  },
  buttonOption: { 
    backgroundColor: 'white', 
    flex: 1, 
    padding: 10, 
    width: 100, 
    alignItems: 'center' 
  },
  options: {
    position: 'absolute',
    right: 0
  },
  dataText: {
    fontWeight: '100',
    fontStyle: 'italic',
    fontSize: 10
  },
  usernameText: {
    fontWeight: '900',
    color: 'black'
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },
  reportImage: {
    flex: 1
  },
  describeContainer: {
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    padding: 10
  }
});

export default styles;
