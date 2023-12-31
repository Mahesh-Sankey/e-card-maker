import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { BangdaCurry, ChickenChili, ChickenSukka, FodnicheVaran, MaharashtiranChickenThali, MuttonCurry, MuttonCurryMarination, MuttonMasala, PaneerGhotala, PomfretFry, ShahiPaneer, SurmaiRavaFry } from './html/Description';

const CollapsibleCard = ({ data }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const renderImage = () => {
        if (typeof data.source === 'string') {
            // Remote image using uri
            return <Image source={{ uri: data.source }} style={styles.cardImage} />;
        } else if (typeof data.source === 'number') {
            // Local image using require
            return <Image source={data.source} style={styles.cardImage} />;
        } else {
            // Handle other cases or provide a default image
            return null;
        }
    };

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                <Text style={styles.cardTitle}>
                    {data.title}
                </Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {renderImage()}
                <ScrollView>
                    <Text style={styles.cardDescription}>{data.description}</Text>
                </ScrollView>
            </Collapsible>
        </View>
    );
};


//-----------------------Veg Section----------------------------------
const VegData = [
    {
        title: 'Fodniche Varan',
        source: require('../asset/receipeIcon/varanIcon.jpg'),
        description: FodnicheVaran,
    },
    {
        title: 'Shahi Paneer',
        source: require('../asset/receipeIcon/shahiPaneerIcon.jpg'),
        description: ShahiPaneer,
    },
    {
        title: 'Paneer Ghotala',
        source: require('../asset/receipeIcon/paneerGhotalaIcon.jpg'),
        description: PaneerGhotala,
    },
];

export const VegScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {VegData.map((item, index) => (
                    <CollapsibleCard key={index} data={item} />
                ))}
            </View>
        </ScrollView>
    );
};

//--------------------Non-Veg Section----------------------------------
const MuttonData = [
    {
        title: 'Maharashtrian Mutton Curry',
        source: require('../asset/receipeIcon/muttonCurryIcon.jpg'),
        description: MuttonCurry,
    },
    {
        title: 'Mutton Masala',
        source: require('../asset/receipeIcon/muttonMasalaIcon.jpg'),
        description: MuttonMasala,
    },
    {
        title: 'Mutton Marination Fry',
        source: require('../asset/receipeIcon/muttonMarinateIcon.jpg'),
        description: MuttonCurryMarination,
    },
];

const MuttonScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {MuttonData.map((item, index) => (
                    <CollapsibleCard key={index} data={item} />
                ))}
            </View>
        </ScrollView>
    );
};

const ChickenData = [
    {
        title: 'Maharashtiran Chicken Thali',
        source: require('../asset/receipeIcon/chickenMahaIcon.jpg'),
        description: MaharashtiranChickenThali,
    },
    {
        title: 'Chicken Sukka',
        source: require('../asset/receipeIcon/chickenSukkaIconn.jpg'),
        description: ChickenSukka,
    },
    {
        title: 'Chicken Chili',
        source: require('../asset/receipeIcon/chickenChilliIcon.jpg'),
        description: ChickenChili,
    },
];

export const ChickenScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {ChickenData.map((item, index) => (
                    <CollapsibleCard key={index} data={item} />
                ))}
            </View>
        </ScrollView>
    );
};

const FishData = [
    {
        title: 'Bangda Curry',
        source: require('../asset/receipeIcon/bangdaFryIcon.jpg'),
        description: BangdaCurry,
    },
    {
        title: 'Pomfret Fry',
        source: require('../asset/receipeIcon/pompretFryIcon.jpg'),
        description: PomfretFry,
    },
    {
        title: 'Surmai Rava Fry',
        source: require('../asset/receipeIcon/surmaiFryIcon.jpg'),
        description: SurmaiRavaFry,
    },
];

export const FishScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {FishData.map((item, index) => (
                    <CollapsibleCard key={index} data={item} img={item.source} />
                ))}
            </View>
        </ScrollView>
    );
};
//------------------------------------------------------------------------

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    },
    cardContainer: {
        marginVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 7,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#be4d25',
        color: '#ffffff',
    },
    cardImage: {
        width: '100%',
        height: 250,
        marginBottom: 10,
        resizeMode: 'stretch'
    },
    cardDescription: {
        textAlign: 'left',
        padding: 3,
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '800'
    },
});

export default MuttonScreen;