import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>View 1</View>
      <View style={styles.view2}>View 2</View>
      <View style={styles.view3}>View 3</View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    width: widthPercentageToDP(20), // Increased width for visibility
    height: 50, // Set a height to make it more visible
    backgroundColor: 'red', // Set background color to make it stand out
    marginBottom: 10, // Add some spacing
  },
  view2: {
    width: widthPercentageToDP(50), // Increased width for visibility
    height: 50,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  view3: {
    width: widthPercentageToDP(20),
    height: 50,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: widthPercentageToDP(2),
  },
});

export default Header;
