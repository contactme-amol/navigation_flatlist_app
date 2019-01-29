import React from 'react';
import { View, Text } from 'react-native';
import FlatListView from './components/FlatListView';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import DetailView from './components/DetailView';
import ProfileView from './components/ProfileView';

const NavigationStack = createStackNavigator({
    FlatList: {screen: FlatListView},
    DetailView: {screen: DetailView},
    ProfileView: {screen: ProfileView}

    /*return (
        <View style={{backgroundColor:'white', flex: 1}}>
            <FlatListView />
        </View>
    );*/
});

const App = createAppContainer(NavigationStack);
export default App;