import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
  View,
} from 'react-native';

import ChatListItem from './src/components/ChatListItem';
import backgroundImage from './src/assets/Bg.png';
import Header from './src/components/Header';

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
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.image}
        source={backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay} />

        <Header />
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={({item}) => <ChatListItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay color
  },
});

export default App;
