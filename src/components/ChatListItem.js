import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../assets/blur-Bg.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ChatListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.chatItemContainer}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        imageStyle={styles.imageBorderRadius}>
        <View style={styles.container}>
          <Image source={backgroundImage} style={styles.profile} />

          <View style={styles.userInfo}>
            <Text style={styles.text}>{item?.name}</Text>
            <Text numberOfLines={1} style={styles.text}>
              {item?.message}
            </Text>
          </View>
          <View style={styles.messageInfo}>
            <Text style={styles.unseenMessages}>{item?.unseenMessages}</Text>
            <Text style={styles.time}>{item?.timeStamp}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: widthPercentageToDP(1),
  },
  imageBorderRadius: {
    borderRadius: widthPercentageToDP(3),
    borderWidth: widthPercentageToDP(0.1),
    borderColor: 'gray',
  },
  container: {
    flexDirection: 'row',
    width: widthPercentageToDP(85),
    gap: widthPercentageToDP(3),
    height: heightPercentageToDP(7),
    marginVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    width: widthPercentageToDP(12),
    height: heightPercentageToDP(6),
    borderRadius: widthPercentageToDP(8.5),
  },
  userInfo: {
    flex: 1,
    gap: heightPercentageToDP(1),
  },
  text: {
    color: 'white',
  },
  messageInfo: {
    flexDirection: 'column',
    height: heightPercentageToDP(5),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  unseenMessages: {
    backgroundColor: '#529D4A82',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: widthPercentageToDP(3.2),
    width: heightPercentageToDP(3),
    height: heightPercentageToDP(3),
    borderRadius: widthPercentageToDP(3),
  },
  time: {
    fontSize: widthPercentageToDP(2.5),
    textAlignVertical: 'bottom',
    alignSelf: 'flex-end',
  },
  chatItemContainer: {
    width: widthPercentageToDP(85),
    alignSelf: 'center',
  },
});

export default ChatListItem;
