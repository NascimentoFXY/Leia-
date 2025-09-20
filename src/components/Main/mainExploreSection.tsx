import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { colors } from '../../config/theme/colors';
import { MainSections } from '.';


const cardList =[{
    id: 1,
    Text: "Terror",
    Image: "a"
}]
export default function MainExploreSecton() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Explore por Gêneros</Text>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Ver tudo</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal contentContainerStyle={{gap: 20, paddingHorizontal: 20}} showsHorizontalScrollIndicator={false}> 
                <MainSections.Cards text={"Terror"}/>
                <MainSections.Cards text={"Humor"}/>
                <MainSections.Cards text={"Romance"}/>
                <MainSections.Cards text={"Ação"}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingBottom: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    text: {
        fontFamily: "high-cruiser",
        color: colors.terciary,
        fontSize: 20
    },
    textButton: {
        color: colors.primary,
        fontSize: 20
    }

});