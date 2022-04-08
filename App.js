import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Game from './Components/Game'
import Leaderboards from './Components/Leaderboards'
import store, { persistor } from './store'
import {PersistGate} from 'redux-persist/integration/react'


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Leaderboards'>
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Leaderboards" component={Leaderboards} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
