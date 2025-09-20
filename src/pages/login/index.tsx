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
import { Input } from '../../components/Input';
import Icon from '../../icons';
import { colors } from '../../config/theme/colors';

export default function Login({ navigation }: any) {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>Complete seu perfil  </Text>
                <Text style={styles.subTitle}>Não se preocupe, somente você tem acesso a suas informações.  </Text>
            </View>

            <TouchableOpacity style={styles.imageContainer}>
                <View style={styles.userImage}>
                    <View style={styles.userEditImage}>
                        <Icon.AntDesign name='edit' color={colors.terciary} size={30} />
                    </View>
                </View>
            </TouchableOpacity>


            <Input.Root>
                <Text style={{ color: colors.terciary }}>Nome</Text>
                <Input.Area placeholder='Digite seu Nome' />
            </Input.Root>
            <Input.Root>
                <Text style={{ color: colors.terciary }}>Número de telefone</Text>
                <Input.Area placeholder='+XX (XX)XXXXX-XXXX' />
            </Input.Root>
            <Input.Root>
                <Text style={{ color: colors.terciary }}>Email</Text>
                <Input.Area placeholder='Digite seu email' />
            </Input.Root>
            <Input.Root>
                <Text style={{ color: colors.terciary }}>Data de nascimento</Text>
                <Input.Area placeholder='DD/MM/AAAA' />
            </Input.Root>
            <Input.Root>
                <Text style={{ color: colors.terciary }}>Gênero</Text>
                <Input.Area />
            </Input.Root>


            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Pular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={()=> navigation.navigate("OptionsSelection")}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};