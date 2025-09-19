import React, { useRef, useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent
} from 'react-native';
import { styles } from './style';
import OptionsButton from '../../components/options';
import { colors } from '../../config/theme/colors';

export default function OptionsSelection({navigation}: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={()=> navigation.goBack()}
            style={{position: "absolute", top: 50, left: 20}}>
                <<Text style={styles.text}>Voltar</Text>>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={[styles.text, styles.title]}>Escolha o gênero de livro que mais te agrada</Text>
                <Text style={[styles.text, styles.subtitle]}>Marque seus gêneros favoritos para melhores recomendações, ou clique em pular.</Text>
            </View>
            <View style={styles.optionsContainer}>

                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
                <OptionsButton text='Texto' />
            </View>
            <View style={ styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};