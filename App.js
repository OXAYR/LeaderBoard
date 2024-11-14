import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import backgroundImage from './src/assets/Bg.png';
import Boxes from './src/assets/Boxes.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import downArrow from './src/assets/icons/down-arrow.png';
import TapBar from './src/components/TapBar';
import Podium from './src/components/LeaderBoardBoxes';

const App = () => {
  const tapBarList = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  return (
    <ImageBackground
      style={styles.image}
      source={backgroundImage}
      resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerButtonContainer}>
            <Text style={styles.headerText}>Profko Ltd </Text>
            <Image style={styles.downArrowIcon} source={downArrow} />
          </TouchableOpacity>
          <View style={styles.profileWrapper}>
            <Image style={styles.profile} source={backgroundImage} />
          </View>
        </View>
        <TapBar items={tapBarList} />
        <View>
          <Podium />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    alignSelf: 'center',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPercentageToDP(5),
  },
  profile: {
    width: widthPercentageToDP(13),
    height: heightPercentageToDP(6),
    borderRadius: widthPercentageToDP(8.5),
  },
  downArrowIcon: {
    width: widthPercentageToDP(2),
    height: heightPercentageToDP(1),
  },
  headerText: {
    color: 'white',
    textAlign: 'right',
  },
  headerButtonContainer: {
    height: heightPercentageToDP(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    width: widthPercentageToDP(1),
  },
});

export default App;
