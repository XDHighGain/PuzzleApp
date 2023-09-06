import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, NavigationNameAuthScreen } from './src/UI/Screens/AuthScreen';
import { MainScreen, NavigationNameMainScreen } from './src/UI/Screens/MainScreen';
import { navigationRef, isReadyRef } from './src/Navigation/RootOptions';

const Stack = createNativeStackNavigator();

function App() {
  const [startScreen, setStartScreen] = useState(null);

  const StackNavigator = ({ children }) => <Stack.Navigator initialRouteName={startScreen}>{children}</Stack.Navigator>;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <StackNavigator>
          <Stack.Screen
            options={{
              headerShown: false,
              detachPreviousScreen: true
            }}
            name={NavigationNameAuthScreen}
            component={AuthScreen}>
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              detachPreviousScreen: true
            }}
            name={NavigationNameMainScreen}
            component={MainScreen}>
          </Stack.Screen>
        </StackNavigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
