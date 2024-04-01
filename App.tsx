import React from 'react';
import {KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View} from 'react-native';
import Login from './components/Login';

function App(): JSX.Element {
  return (
    
      <View style={wrapper.viewWrapper}>
        <Login />
        <StatusBar backgroundColor={'#E8E8E8'} barStyle="dark-content" />
      </View>
  );
}

const wrapper = StyleSheet.create({
  viewWrapper: {
    // paddingTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
