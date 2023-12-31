import React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export const CreateTemplate = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.section1]}>
                <TouchableOpacity onPress={() => props.navigation.navigate('ChickenPage')} activeOpacity={0.7}>
                    <View style={[styles.headerCardStyle]}>
                        <Image style={styles.headerImgStyle} source={require('../asset/chickenIcon.jpg')} />
                        <Text style={styles.headerTextStyles}>{'Chicken'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('MuttonPage')} activeOpacity={0.7}>
                    <View style={[styles.headerCardStyle]}>
                        <Image style={styles.headerImgStyle} source={require('../asset/muttonIcon.jpg')} />
                        <Text style={styles.headerTextStyles}>{'Mutton'}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('FishPage')} activeOpacity={0.7}>
                    <View style={[styles.headerCardStyle]}>
                        <Image style={styles.headerImgStyle} source={require('../asset/fishIcon.jpg')} />
                        <Text style={styles.headerTextStyles}>{'Fish'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
    },
    editImg: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    headerImgStyle: {
        height: '83%',
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 30
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
        width: '80%',
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 8,
        // padding: 15,
        margin: 15,
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
        fontSize: 16,
        padding: 2,
        textAlign: 'center',
    },
});