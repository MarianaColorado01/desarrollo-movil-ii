import {Stack} from 'expo-router';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { use, useEffect } from 'react';
import 'react-native-reanimated';
import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(){

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(()=>{
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded]);

  if(!loaded){
    return null;
  }

  return(
    <GestureHandlerRootView style={{flex:1}}>
      <PermissionsCheckerProvider>
        <Stack screenOptions={{headerShown:false,}}>
          <Stack.Screen
            name="loading/index"
            options={{animation:'none'}}
          />
          <Stack.Screen
            name="map/index"
            options={{animation:'fade'}}
          />
          <Stack.Screen
            name="permissions/index"
            options={{animation:'fade'}}
          />
        </Stack>
      </PermissionsCheckerProvider>

    </GestureHandlerRootView>
  );
}