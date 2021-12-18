import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Recetas from './src/screens/Recetas';
import DetalleRecetas from './src/screens/DetalleRecetas';
import Favoritos from './src/screens/Favoritos';

import Context from './src/Context';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Context>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Recetas" component={Recetas} />
            <Stack.Screen name="DetalleRecetas" component={DetalleRecetas} />
            <Stack.Screen name="Favoritos" component={Favoritos} />
          </Stack.Navigator>
        </NavigationContainer>
    </Context>
  );
};

export default App;
