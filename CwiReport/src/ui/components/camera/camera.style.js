import { StyleSheet } from 'react-native'

const camera = StyleSheet.create({
  container: {
    flex: 1
  },
  rnCamera: {
    flex: 1
  },
})

const permissionRequest = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    zIndex: 1
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    marginTop: 10
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: 'white'
  }
})

export const styles = {
  camera,
  permissionRequest,
}