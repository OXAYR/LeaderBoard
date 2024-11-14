import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import backgroundImage from './src/assets/Bg.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ChatListItem from './src/components/ChatListItem';

const App = () => {
  const DATA = [
    {
      message:
        'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba sad asd as dasd asd as da sad',
      name: 'First Item',
    },
    {
      message: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
    },
    {
      message: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
    },
  ];
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ImageBackground source={backgroundImage} resizeMode="cover">
        <View style={[styles.imageOverlay, styles.image]}>
          <View style={styles.headerContainer}>
            <View style={styles.backButton}>
              <Text style={styles.buttonText}>{`<`}</Text>
            </View>
            <View style={styles.headerButtonContainer}>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.buttonText}>Send to all</Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.profile} source={backgroundImage} />
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={({item}) => <ChatListItem item={item} />}
              keyExtractor={item => item.name}
            />
          </View>
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
    width: widthPercentageToDP(13),
    height: heightPercentageToDP(6),
    backgroundColor: '#3263B8',
    borderColor: '#508AFE',
    borderRadius: widthPercentageToDP(8.5),
    borderRightWidth: widthPercentageToDP(0.5),
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
  },
  headerContainer: {
    marginVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: widthPercentageToDP(5),
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  imageOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: widthPercentageToDP(4),
    fontWeight: 'bold',
  },
});

export default App;
