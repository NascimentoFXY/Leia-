import React from "react";
import { StyleSheet, View } from "react-native";

interface HeaderRootProps{
    children: React.ReactNode
}

export default function HeaderRoot({children}: HeaderRootProps){

    return(

    <View style={styles.container}>
        {children}
    </View>

    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    }
})