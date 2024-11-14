import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import backgroundImageButton from '../assets/buttonBg.png';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const TapBar = ({items}) => {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <>
      {/* <Text style={styles.tapBarText}>TapBar</Text>{' '} */}
      <View style={styles.tapBarItems}>
        {items?.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedTab(item)}
            style={styles.tabContainer}>
            {selectedTab === item ? (
              <ImageBackground
                source={backgroundImageButton}
                style={styles.selectedTab}
                resizeMode="cover">
                <View style={styles.centeredContent}>
                  <Text style={styles.selectedText}>{item}</Text>
                </View>
              </ImageBackground>
            ) : (
              <View style={styles.unselectedTab}>
                <Text style={styles.unselectedText}>{item}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tapBarItems: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: heightPercentageToDP(2),
    width: '100%',
  },
  tabContainer: {
    width: widthPercentageToDP(25),
  },
  selectedTab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(5),
  },
  unselectedTab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(5),
  },
  selectedText: {
    color: 'white',
    paddingBottom: widthPercentageToDP(1.5),
    fontSize: widthPercentageToDP(3.5),
  },
  unselectedText: {
    color: 'white',
    paddingBottom: widthPercentageToDP(1.5),
    fontSize: widthPercentageToDP(3.5),
  },
  tapBarText: {
    fontSize: widthPercentageToDP(3),
    color: 'white',
  },
});

export default TapBar;
