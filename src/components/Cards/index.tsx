import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import { colors } from "../../config/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { font } from "../../config/font/font";
interface bookDataProps {
    id?: string,
    bookName: string,
    autor: string,
    rating: string,
    image?: any
}

export default function Cards(data: bookDataProps) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <Image source={data.image} style={{flex: 1, resizeMode: "cover", position: "absolute", width: 200, height: 300}}/>
            <View style={styles.rating}>
                <Text style={styles.text}>
                    {data.rating}
                </Text>
            </View>
            <LinearGradient
                colors={['transparent', '#000000']} // de transparente para preto
                start={{ x: 0, y: 0 }}  // topo
                end={{ x: 0, y: 1 }}    // fundo
                style={{ height: "30%", marginTop: "auto" }}
            >
                <View style={styles.infoContainer}>
                    <Text style={styles.bookName}>{data.bookName}</Text>
                    <Text style={styles.desc}>{data.autor}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 300,
        borderRadius: 40,
        backgroundColor: colors.gray_blue,
        marginHorizontal: 15,
        overflow: "hidden",
        
    },
    rating: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "#000",
        borderColor: colors.primary,
        borderWidth: 2,
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: colors.terciary,
        fontWeight: 600
    },
    desc: {
        color: colors.terciary,
    },
    bookName:{
        fontSize: 20,
        color: colors.terciary,
        fontWeight: 600,
        fontFamily: font.primary
    },
    infoContainer:{
        padding: 10,
        gap: 2
    }
})