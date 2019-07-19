import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';


const DEVICE_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: DEVICE_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width:100,
        height:100,
    },
    pageTitle: {
        color: 'black',
        marginBottom:25,
        backgroundColor: 'transparent',
        fontSize: 30,
        fontFamily: 'Montserrat-Medium',
        fontWeight:'bold', 
    }
});
