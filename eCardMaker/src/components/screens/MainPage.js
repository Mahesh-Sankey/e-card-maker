import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const MainPage = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainerHead]}>
                <View style={[styles.section1]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('EditVegPage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/edit.png')} />
                            <Text style={styles.headerTextStyles}>{'Veg'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/edit.png')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.section1]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/edit.png')} />
                            <Text style={styles.headerTextStyles}>{'Non-Veg'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                        <View style={[styles.headerCardStyle]}>
                            <Image style={styles.headerImgStyle} source={require('../asset/edit.png')} />
                            <Text style={styles.headerTextStyles}>{'Coming Soon'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.subContainerBottom]}>
                <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                    <View style={[styles.cardStyle]}>
                        <Image style={styles.editImg} source={require('../asset/edit.png')} />
                        <Text style={styles.textStyles}>{'Create'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                    <View style={[styles.cardStyle]}>
                        <Image style={styles.editImg} source={require('../asset/edit.png')} />
                        <Text style={styles.textStyles}>{'Create'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                    <View style={[styles.cardStyle]}>
                        <Image style={styles.editImg} source={require('../asset/edit.png')} />
                        <Text style={styles.textStyles}>{'Create'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('CreateTemplatePage')} activeOpacity={0.7}>
                    <View style={[styles.cardStyle]}>
                        <Image style={styles.editImg} source={require('../asset/edit.png')} />
                        <Text style={styles.textStyles}>{'Create'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
    },
    subContainerBottom: {
        flexDirection: 'row',
        padding: 20,
        flex: 0.2,
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
        resizeMode: 'contain'
    },
    headerImgStyle: {
        height: 45,
        width: 45,
        alignSelf: 'center',
        resizeMode: 'contain'
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
        fontSize: 16,
        textAlign: 'center',
    },
    section1: {
        flexDirection: 'column',
    }
});