import React from "react"
import { View, Text, ViewStyle, TextInput, StyleSheet } from "react-native"
import { colors } from "../../config/theme/colors"

interface InputAreaProps {
    style?: ViewStyle,
    placeholder?: string
}

export default function InputArea({ style, placeholder }: InputAreaProps) {
    return (
        <View>
            <TextInput style={[styles.container, style]} placeholder={placeholder} placeholderTextColor={colors.primary} ></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 20,
        height: 55,
        color: colors.terciary,
        paddingHorizontal: 20,
    }

})