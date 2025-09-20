import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../config/theme/colors";

interface HeaderTitleProps{
    text: string
}

export default function HeaderTitle({text}: HeaderTitleProps){
   return( <View>
        <Text style={styles.text}>{text}</Text>
    </View>)
}
const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        textAlign: "center",
        color: colors.terciary
    }
})