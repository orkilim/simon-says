import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Game from './Components/Game'
import Leaderboards from './Components/Leaderboards'
import store from './store'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Game'>
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Leaderboards" component={Leaderboards}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
