import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from './src/assets/Bg.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const App = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.headerContainer}>
          <View style={styles.backButton}>
            <Text style={styles.buttonText}>View 1</Text>
          </View>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.buttonText}>Send to all</Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.profile} source={backgroundImage} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(8),
    backgroundColor: 'red',

    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonContainer: {
    width: widthPercentageToDP(50),
    height: heightPercentageToDP(8),

    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    backgroundColor: '#508AFE',
    paddingHorizontal: widthPercentageToDP(8),
    paddingVertical: heightPercentageToDP(2),
    borderRadius: widthPercentageToDP(8),
  },
  profile: {
    width: widthPercentageToDP(13),
    height: heightPercentageToDP(6),
    borderRadius: widthPercentageToDP(8.5),
    backgroundColor: 'green',
  },
  headerContainer: {
    marginVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: widthPercentageToDP(2),
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
