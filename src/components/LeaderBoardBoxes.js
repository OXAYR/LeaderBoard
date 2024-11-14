import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Boxes from '../assets/Boxes.png';

const podiumData = [
  {
    name: 'Jocelyn Herwitz',
    percentage: '150%',
    prize: '$110',
    image: require('../assets/Boxes.png'),
    position: '1',
  },
  {
    name: 'Rayna Dorwart',
    percentage: '70%',
    image: require('../assets/Boxes.png'),
    position: '2',
  },
  {
    name: 'Alena Bator',
    percentage: '50%',
    image: require('../assets/Boxes.png'),
    position: '3',
  },
];

const Podium = () => {
  return (
    <View style={styles.container}>
      {podiumData.map((user, index) => (
        <View
          key={index}
          style={[styles.userContainer, styles[`position${user.position}`]]}>
          <Image source={user.image} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.percentage}>{user.percentage}</Text>
          {user.position === '1' && (
            <View style={styles.prizeContainer}>
              <Text style={styles.prize}>{user.prize}</Text>
            </View>
          )}
        </View>
      ))}

      <Image source={Boxes} style={styles.boxesImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  boxesImage: {
    width: wp(85),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(20),
  },
  userContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  position1: {
    top: hp(0),
  },
  position2: {
    left: wp(8),
    top: hp(7),
  },
  position3: {
    right: wp(10),
    top: hp(10),
  },
  avatar: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
  },
  name: {
    marginTop: hp(1),
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp(4),
  },
  percentage: {
    color: 'white',
    fontSize: wp(3.5),
  },
  prizeContainer: {
    backgroundColor: 'gold',
    padding: wp(2),
    borderRadius: wp(2),
    marginTop: hp(1),
  },
  prize: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});

export default Podium;
