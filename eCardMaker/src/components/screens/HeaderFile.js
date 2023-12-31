import { Text, View, Button, TextInput } from 'react-native';

export const HeaderFile = props => {
    const btnAction = () => {
        console.warn('Hi');
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            <Button title="Go to HomePage" onPress={btnAction}></Button>
        </View>
    );
};