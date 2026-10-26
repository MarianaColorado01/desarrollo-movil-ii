import "./global.css";
import { useEffect } from "react";
import {useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { Slot } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


SplashScreen.preventAutoHideAsync();
 
const RootLayout = () => {
    const[fontsLoaded, error] = useFonts({
        ...Ionicons.font,
        'WorkSans-Black': require('../../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-MediumItalic': require('../../assets/fonts/WorkSans-MediumItalic.ttf'),
    });

    useEffect(() => {
        if(fontsLoaded || error){
            SplashScreen.hideAsync();
        }
    },[fontsLoaded,error]);
    if (!fontsLoaded && !error)return null;
    return(
        <GestureHandlerRootView style={{flex:1}}>
            {/*flex: permiteque el contenedor ocupe toda la pantalla*/ }
            <Slot/>
        </GestureHandlerRootView>
    );

};

export default RootLayout;
