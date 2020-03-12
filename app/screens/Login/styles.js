import { StyleSheet } from 'react-native';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#2a405e'
  },
  image: {
    marginTop:5
    //height: scaleVertical(77),
    //resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  content: {
    justifyContent: 'space-between',
    marginTop : Platform.OS === "ios" ? 35 : 0
  },
  save: {
    marginVertical: 20,
    borderRadius:0,
    backgroundColor: '#ed1b24'
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderColor: '#2a405e'
  },
  footer: {},
  loading: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginInput:{
    borderRadius:0,
    borderWidth: 1,
    fontSize:13,
    padding: 5,
  },
  loginHeader:{
    marginBottom: 20,
  },
  eternusLogo:{
   // width: 150,
    //height:25

    height: scaleVertical(25),
    resizeMode: 'contain'
  }
});

export default styles;
