import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const RootLayout = () => {
    return (
        <View style={globalStyles.background}>
            <Slot />
            <StatusBar style="light" />
        </View>
    );
};

export default RootLayout;