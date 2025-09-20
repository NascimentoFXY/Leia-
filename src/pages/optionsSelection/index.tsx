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

import Icon from '../../icons';
import { useAuth } from '../../context/auth';


export default function OptionsSelection({ navigation }: any) {

    const {authUser} = useAuth()!
    return (
        <View style={styles.container}>

            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
>

                    <Icon.AntDesign name='arrow-left' size={40} color={colors.primary} />

                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={[styles.text, styles.title]}>Escolha o gênero de livro que mais te agrada</Text>
                <Text style={[styles.text, styles.subtitle]}>Marque seus gêneros favoritos para melhores recomendações, ou clique em pular.</Text>
            </View>
            <View style={styles.optionsContainer}>

                <OptionsButton text='Investigação' />
                <OptionsButton text='Sci - Fi' />
                <OptionsButton text='Aventura' />
                <OptionsButton text='Romance' />
                <OptionsButton text='Suspense' />
                <OptionsButton text='Mitologia' />
                <OptionsButton text='Fantasia Medieval' />
                <OptionsButton text='Clássicos' />
                <OptionsButton text='Humor' />
                <OptionsButton text='Arte' />
                <OptionsButton text='Dramático' />
                <OptionsButton text='Psicologia' />
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Pular</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={()=> authUser(true)}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};