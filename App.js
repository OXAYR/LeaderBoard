import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  StatusBar,
  View,
} from 'react-native';

import ChatListItem from './src/components/ChatListItem';
import backgroundImage from './src/assets/Bg.png';
import Header from './src/components/Header';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const App = () => {
  const DATA = [
    {
      message:
        'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba sad asd as dasd asd as da sad',
      name: 'First Item',
      unseenMessages: '05',
      timeStamp: '10:00 AM',
    },
    {
      message: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message:
        'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba sad asd as dasd asd as da sad',
      name: 'First Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message:
        'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba sad asd as dasd asd as da sad',
      name: 'First Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
    {
      message: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      unseenMessages: '05',
      timeStamp: ' 10:00 AM',
    },
  ];

  const handleSendButtonPress = () => {
    console.log('semd button press');
  };

  const handleBackButtonPress = () => {
    console.log('back button press');
  };

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.image}
        source={backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Header
            onSendButtonPress={handleSendButtonPress}
            onbackButtonPress={handleBackButtonPress}
          />
          <FlatList
            data={DATA}
            renderItem={({item}) => <ChatListItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default App;
