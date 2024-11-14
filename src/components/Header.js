import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import backIcon from '../assets/icons/back-icon.png';
import backgroundImage from '../assets/Bg.png';

const Header = ({onSendButtonPress, onbackButtonPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onbackButtonPress}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={onSendButtonPress}>
          <Text style={styles.buttonText}>Send to all</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.profile} source={backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: widthPercentageToDP(4),
    fontWeight: 'bold',
  },
  backButton: {
    width: widthPercentageToDP(13),
    height: heightPercentageToDP(6),
    backgroundColor: '#3263B8',
    borderColor: '#508AFE',
    borderRadius: widthPercentageToDP(8.5),
    borderRightWidth: widthPercentageToDP(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: widthPercentageToDP(2),
    height: heightPercentageToDP(2),
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
  },
  headerContainer: {
    marginVertical: heightPercentageToDP(5),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: widthPercentageToDP(5),
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(85),
    alignSelf: 'center',
  },
});

export default Header;
