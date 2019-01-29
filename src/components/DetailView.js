import React, {PureComponent} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class DetailView extends PureComponent {
    static navigationOptions = {
        title: 'Detail Screen',
    };

    render() {
        const { params } = this.props.navigation.state;

        return (
            <TouchableOpacity onPress={this.onPressDetailButton.bind(this)}>
                <View style={containerViewStyle.viewStyle}>
                    <Text> {params.name} </Text>
                </View>
            </TouchableOpacity>
        );
    }

    onPressDetailButton() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        navigate('ProfileView', {name: params.name});
    }
}

const containerViewStyle = {
    viewStyle: {
        top: 20,
        backgroundColor: 'red',
        height: 40
    }
}

export default DetailView;