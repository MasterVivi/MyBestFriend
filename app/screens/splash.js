import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component
{
  render()
  {
    return (
      <View
        style={styles.wrapper}>
        <Text style={styles.title}>My Best Friend</Text>
      </View>
      <Spinner>
        
      </Spinner>
    );
  }
}

const styles = StyleSheet.create(
{
  wrapper: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
