import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

type Props = PropsWithChildren<{scroll?:boolean}>;

export function Screen({children, scroll = false}: Props){
    if(scroll){
        return(
            <ScrollView className="flex-1 bg-zinc-950" contentContainerStyle={{paddingBottom:32}}>
                {children}
            </ScrollView>
        );
    }
    return <View className="flex-1 bg-zinc-950" >{children}</View>
}