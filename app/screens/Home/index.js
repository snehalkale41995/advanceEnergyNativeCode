// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from './styles';


// export default function Login() {
//   return (
//     <View style={styles.container}>
//       <Text>Home</Text>
//     </View>
//   );
// }


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class CustomComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>
          Your Component with static style
        </Text>
      </View>
    );
  }

}


const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
});