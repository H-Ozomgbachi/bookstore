import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#d35400'}
        translucent={true}
      />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
