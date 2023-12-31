import React from 'react';
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';

const InviteFriendsScreen = () => {
  const inviteFriends = async () => {
    try {
      const shareOptions = {
        title: 'Invite Friends',
        message: 'Check out this amazing app! Download it now.',
        url: 'https://play.google.com/store/apps/details?id=com.ecardmaker',
        subject: 'Invite to My App', // for email
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const CustomMainPageHeader = () => {
    return (
      <ImageBackground
        source={require('../asset/footerTexture.jpg')}
        style={styles.headerContainer}
        imageStyle={styles.backgroundImageFooter}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <TouchableOpacity onPress={inviteFriends} activeOpacity={0.7}>
            <View style={[styles.cardStyle]}>
              <Image style={styles.editImg} source={require('../asset/share.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={inviteFriends} activeOpacity={0.7}>
            <View style={[styles.cardStyle]}>
              <Image style={styles.editImg} source={require('../asset/social.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      <CustomMainPageHeader />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 30,
  },
  headerContainer: {
    height: 95,
    justifyContent: 'center',
    padding: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden', // Clip the corners of the background image
  },
  backgroundImageFooter: {
    resizeMode: 'cover', // Cover the entire background
    flex: 1,
  },
  subContainerBottom: {
    flexDirection: 'row',
    flex: 0.2,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  subContainerHead: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 20,
    flex: 1,
    backgroundColor: '#f0f8ff'
  },
  editImg: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  headerImgStyle: {
    height: 98,
    width: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  cardStyle: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 8,
    margin: 5,
    borderRadius: 20,
  },
  headerCardStyle: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    justifyContent: 'center',
    elevation: 8,
    margin: 25,
    borderRadius: 30,
  },
  textStyles: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '800'
  },
  headerTextStyles: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    paddingBottom: 8,
    paddingTop: 2,
  },
  section1: {
    flexDirection: 'column',
  }
});

export default InviteFriendsScreen;