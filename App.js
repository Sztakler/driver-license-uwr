import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'cornflowerblue',
    marginTop: 50,
    alignSelf: 'center',
  },
});

const App = () => {
  return (
    <View styles={styles.screenContainer}>
      <Text style={styles.text}>I'm a React Native component</Text>
    </View>
  );
};

export default App;
