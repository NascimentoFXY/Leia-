import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../../../config/theme/colors";
interface CardProps{
    text: string,
    Image?: any,
    style?: ViewStyle
}
export default function Cards({text, Image, style}: CardProps){
    return(
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.gray_blue,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 200,
        height: 100,
    },
    text:{
        fontFamily: "high-cruiser",
        color: colors.terciary,
    }
})