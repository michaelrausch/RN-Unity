import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ARView from './screens/ARView';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="QuickViewAR" component={Home}></Stack.Screen>
        <Stack.Screen name="ARView" component={ARView}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
