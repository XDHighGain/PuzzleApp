import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, NavigationNameAuthScreen } from './src/UI/Screens/AuthScreen';
import { MainScreen, NavigationNameMainScreen } from './src/UI/Screens/MainScreen';
import { navigationRef } from './src/Navigation/RootOptions';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export const isReadyRef2 = React.createRef<(() => void) | boolean | null>();
function App() {

  return (

    <NavigationContainer
      ref={navigationRef}>
      <SafeAreaView
        edges={['top']}
        style={{ flex: 1 }}>
        <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'} />
        <Stack.Navigator initialRouteName={NavigationNameAuthScreen}>
          <Stack.Screen
            name={NavigationNameAuthScreen}
            component={AuthScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name={NavigationNameMainScreen}
            component={MainScreen}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;