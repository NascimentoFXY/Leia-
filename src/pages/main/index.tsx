import React, { } from "react";
import { View, Text, ScrollView, FlatList } from 'react-native'
import { colors } from "../../config/theme/colors";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Icon from "../../icons";
import HeaderInput from "../../components/Header/headerInput";
import Cards from "../../components/Cards";
const booksList = [
    {
        id: "1",
        Rating: "5.0",
        Name: "Nome Livro",
        Description: "Descrição livro",
        Image: require("../../assets/images/1984.jpg")
    },
    {
        id: "2",
        Rating: "3.0",
        Name: "Nome Livro",
        Description: "Descrição livro"
    },
    {
        id: "3",
        Rating: "4.0",
        Name: "Nome Livro",
        Description: "Descrição livro"
    },
    {
        id: "4",
        Rating: "3.5",
        Name: "Nome Livro",
        Description: "Descrição livro"
    }
]
export default function Main({ navigation }: any) {
    return (
        <View style={styles.container}>

            <View>
                <Header.Root>
                    <Header.Title text="Leia+" />

                    <Header.Buttons style={{ gap: 15 }}>
                        <Header.Button content={<Icon.Feather name="search" color={colors.terciary} size={35} />} />
                        <Header.Button content={<Icon.Ionicons name="notifications" color={colors.terciary} size={35} />} />

                    </Header.Buttons>

                </Header.Root>
            </View>

            <View>
                <FlatList
                    data={booksList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Cards bookName={item.Name} rating={item.Rating} desc={item.Description} image={item.Image}/>
                    )}
                
                    horizontal
                
                />


            </View>
        </View>
    )
}