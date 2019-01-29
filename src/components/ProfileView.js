import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class ProfileView extends PureComponent {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={containerViewStyle.viewStyle}> 
                <Text>
                    {params.name}
                </Text>
            </View>
        );
    }

}

const containerViewStyle = {
    viewStyle: {
        top: 20,
        backgroundColor: 'red',
        height: 40
    }
}


export default ProfileView;