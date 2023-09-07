import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, NavigationNameAuthScreen } from './src/UI/Screens/AuthScreen';
import { MainScreen, NavigationNameMainScreen } from './src/UI/Screens/MainScreen';
import { navigationRef, isReadyRef } from './src/Navigation/RootOptions';
import 'react-native-reanimated';
import { Colors } from './src/Resources/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

function App() {
  const [startScreen, setStartScreen] = useState(null);

  const StackNavigator = ({ children }) => <Stack.Navigator initialRouteName={startScreen}>{children}</Stack.Navigator>;

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: Colors.White }}>
      <NavigationContainer
      style={{flex: 1}}
      ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
          <SafeAreaView 
          edges={['top']}
          style={{flex: 1}}>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}/>
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
          </SafeAreaView>
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
