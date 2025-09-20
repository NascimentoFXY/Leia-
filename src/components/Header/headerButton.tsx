import React from "react";
import { StyleSheet, Touchable, TouchableOpacity, View, ViewStyle } from "react-native";
import { colors } from "../../config/theme/colors";

interface HeaderButtonProps {
    content?: React.ReactNode,
    style?: ViewStyle,
    onPress?: ()=> void
}

export default function HeaderButton({ content, style,onPress }: HeaderButtonProps) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {content}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    
    }
})