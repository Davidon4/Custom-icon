import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomIcon from './CustomIcon';

const App = () => {
  return (
    <View style={styles.container}>
      <CustomIcon name='Watches'/>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;