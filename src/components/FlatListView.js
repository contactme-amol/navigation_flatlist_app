import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import FlatListItem from './FlatListItem';
import LibraryReducer from './reducer/LibraryReducer';

class FlatListView extends PureComponent {
    state = { records: [{name: "Amol Chaudhari", id: 111}, {name: "Amol Patil", id: 112}, 
    {name: "Amol Gujar", id: 113}, {name: "Amol Jain", id: 114}]}
    _keyExtractor = (item, index) => item.id;

    static navigationOptions = {
        title: 'List Screen',
    }; 

    componentWillMount() {
       // this.setState({records: [{name: "Amol Chaudhari", id: 111}, {name: "Amol Patil", id: 112}, 
        //{name: "Amol Gujar", id: 113}, {name: "Amol Jain", id: 114}]})

    }

    _renderItem = ({item}) => {  
        //alert("person name: " + item.name);
        //return (
            <FlatListItem
                id={item.id}
                title={item.name}
                selected={true}
                onPressItem={this.onPressItemCell}
            />
        //);          
    };

    onPressItemCell = (title) => {
        debugger
        //alert("Selected value:" + String(id));
        const {navigate} = this.props.navigation;
        navigate('DetailView', {name: title})
    }

    render() {
        console.log(this.state.records);
        return (
            //<View style={styles.viewStyle}>
            <FlatList
                // contentContainerStyle = {{backgroundColor:'lightGrey', flex: 1}}
                data={this.state.records}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <FlatListItem
                        id={item.id}
                        title={item.name}
                        selected={true}
                        onPressItem={this.onPressItemCell}
                    />
                )}
            />
            //</View>
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