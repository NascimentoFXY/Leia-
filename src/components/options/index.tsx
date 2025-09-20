import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/theme/colors';

// Definindo o tipo para as propriedades (props) do componente
interface ButtonProps {
  text: string;

}

const OptionsButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.primary,
    width: "auto",
    flexGrow: 1,
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },
});

export default OptionsButton;
