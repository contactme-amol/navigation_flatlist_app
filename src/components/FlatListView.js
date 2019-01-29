import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import FlatListItem from './FlatListItem';
import LibraryReducer from './reducer/LibraryReducer';

class FlatListView extends PureComponent {
    state = { records: []}

    static navigationOptions = {
        title: 'List Screen',
    }; 

    componentWillMount() {
        this.setState({records: [{name: "Amol Chaudhari", id: 111}, {name: "Amol Patil", id: 112}, 
        {name: "Amol Gujar", id: 113}, {name: "Amol Jain", id: 114}]})

    }

    renderItem(item) {
        return (

            /*<View style={{backgroundColor: 'yellow'}}>
                <Text> {item.name} </Text>
            </View>*/
        
            <FlatListItem
                id={item.id}
                title={item.name}
                onPressItem={this.onPressItemCell}
            />
        );
    }

    onPressItemCell = (title) => {
        //alert("Selected value:" + String(id));
        const {navigate} = this.props.navigation;
        navigate('DetailView', {name: title})
    }

    render() {
        console.log(this.state.records);
        return (
            <View style={styles.viewStyle}>
                <FlatList 
                    contentContainerStyle = {{backgroundColor:'lightGrey', flex: 1}}
                    data={this.state.records}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => this.renderItem(item)}
                />
            </View>
        )
    }

}

const styles = {
    viewStyle: {
        color: '#F0F0F0',
        backgroundColor:"gray",
        flex: 1
    }
};
export default FlatListView;