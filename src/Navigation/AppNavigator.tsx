import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';

import SplashScreen from '../screens/Splash/SplashScreen';
import Onboarding1Screen from '../screens/Onboarding/Onboarding1Screen';
import Onboarding2Screen from '../screens/Onboarding/Onboarding2Screen';
import Onboarding3Screen from '../screens/Onboarding/Onboarding3Screen';
import Partner_Welcome from '../screens/Partner_Setup/Partner_welcome';
import DOB from '../screens/Partner_Setup/DOB';


const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
        <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
        <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
        <Stack.Screen name="Partner_Welcome" component={Partner_Welcome} />
        <Stack.Screen name="DOB" component={DOB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
