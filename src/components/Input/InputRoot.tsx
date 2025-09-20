import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

interface InputRootProps{
    children: React.ReactNode,
    style?: ViewStyle
}

export default function InputRoot({children, style}: InputRootProps){
    return(
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})