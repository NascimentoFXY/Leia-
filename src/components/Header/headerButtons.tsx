import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface HeaderButtonsProps {
    children: React.ReactNode,
    style?: ViewStyle,
}
export default function HeaderButtons({ children,style }: HeaderButtonsProps) {

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }
})