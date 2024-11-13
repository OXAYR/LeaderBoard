import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import backgroundImage from './src/assets/Bg.png';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
