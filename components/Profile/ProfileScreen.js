import * as React from 'react';
import { Text, View, Image } from 'react-native';

class ProfileScreen extends React.Component {
    render() {
        const { avatar, firstname, lastname, localisation, metier } = this.props.route.params;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 64, height: 64, borderRadius: 32 }}
                    source={{ uri: avatar }}
                />
                <Text>{firstname} {lastname}</Text>
                <Text>{localisation}</Text>
                <Text>{metier}</Text>
            </View>
        );
    }
}

export default ProfileScreen;