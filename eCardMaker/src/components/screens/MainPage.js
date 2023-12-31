import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InviteFriendsScreen from '../commonComponents/Share';

export const MainPage = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainerHead]}>
                <View style={[styles.section1]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('EditVegPage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/vegsIcon.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Veg'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/vegetable.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/vegetable.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.section1]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/nonvegsIcon.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Non-Veg'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/vegetable.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/vegetable.jpg')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <InviteFriendsScreen />
            </View>
        </View>
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
    subContainerBottom: {
        flexDirection: 'row',
        padding: 10,
        flex: 0.2,
        width: '100%',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#51abcb',
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
        resizeMode: 'contain'
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