import React, { useRef, useState } from 'react';
import {
    Dimensions,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent
} from 'react-native';
import { styles } from './style';
import { colors } from '../../config/theme/colors';



export default function Intro({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.image}/>
            <View style={styles.modal}>

                <Text style={styles.title}>O Aplicativo de Livraria que irá facilitar sua vida</Text>
                <Text style={styles.subTitle}>Descubra um universo de histórias, reserve seus livros favoritos com apenas alguns toques e aproveite uma experiência de leitura simples, prática e personalizada.</Text>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.text}>Faça login com a microsoft</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Login")}><Text style={styles.text}>Vamos começar</Text></TouchableOpacity>
                </View>
                <View style={styles.createAc}>
                    <Text style={styles.text}>Ja tem uma conta?
                        <TouchableOpacity style={{ alignItems: "center" }}>
                            <Text style={{ color: colors.primary }}>Login</Text>
                        </TouchableOpacity>
                    </Text>
                </View>


            </View>

        </View>
    );
};