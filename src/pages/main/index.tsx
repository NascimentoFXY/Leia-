import React, { } from "react";
import { View, Text, ScrollView, FlatList } from 'react-native'
import { colors } from "../../config/theme/colors";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Icon from "../../icons";
import Cards from "../../components/Cards";
import { MainSections } from "../../components/Main";
const booksList = [
    {
        id: "1",
        Rating: "5.0",
        Name: "1984",
        Autor: "George Orwell",
        Image: require("../../assets/images/1984.jpg")
    },
    {
        id: "2",
        Rating: "3.0",
        Name: "Medo Clássico",
        Autor: "Edgar Allan Poe",
        Image: require("../../assets/images/medoClassico.jpg")
    },
    {
        id: "3",
        Rating: "4.0",
        Name: "Trivium",
        Autor: "Irmã Maria Joseph",
        Image: require("../../assets/images/trivium.jpg")
    },
]
export default function Main({ navigation }: any) {
    return (
        <View style={styles.container}>
            {/* Todos os tipos de header já estão feitos, inclusive com o text input, dá uma olhada lá no src/compontents/header 
                pra usar é bem simples, basta colocar Header.Root como wrapper, e usar Header.Input pra usar o campo de texto


                exemplo: 

                <Header.Root>
                    <Header.Title text="Leia+" />
   ==================  <Header.Input> ================
                        <Header.Buttons style={{ gap: 15 }}>
                            <Header.Button content={<Icon.Feather name="search" color={colors.terciary} size={35} />} />
                            <Header.Button content={<Icon.Ionicons name="notifications" color={colors.terciary} size={35} />} />
                        </Header.Buttons>
   ==================  </Header.Input> ===============
                </Header.Root>


                todos os compontentes do header permite estilização, só adicionar style={}
            */}
            
            <View>
                <Header.Root>
                    <Header.Title text="Leia+" />
                        <Header.Buttons style={{ gap: 15 }}>
                            <Header.Button content={<Icon.Feather name="search" color={colors.terciary} size={35} />} />
                            <Header.Button content={<Icon.Ionicons name="notifications" color={colors.terciary} size={35} />} />
                        </Header.Buttons>
                </Header.Root>
            </View>
            <ScrollView>


                <View>
                    <FlatList
                        data={booksList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Cards bookName={item.Name} rating={item.Rating} autor={item.Autor} image={item.Image} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal

                    />
                </View>
                <View style={styles.section}>
                    <MainSections.Explore />
                    <MainSections.NewBooks />
                </View>
            </ScrollView>
        </View>
    )
}