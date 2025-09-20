import React from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { colors } from "../../config/theme/colors";

interface HeaderInputProps {
    children?: React.ReactNode,
    style?: ViewStyle,
}
export default function HeaderInput({ children, style }: HeaderInputProps) {

    return (
        <View style={[styles.container, style]}>
            <TextInput style={{flex:1}}>
            </TextInput >
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#c4633c6b",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary
    }
})