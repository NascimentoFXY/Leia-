import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/theme/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    backgroundColor: colors.secondary,
    flex: 2,
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    padding: 30
  },
  image: {
    backgroundColor: colors.primary,
    flex: 1
  },
  title: {
    color: colors.terciary,
    fontSize: 30,
    fontWeight: 800,
    textAlign: "center"
  },
  subTitle: {
    color: colors.terciary,
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'justify'
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "100%",
    marginTop: "auto"
  },
  button1: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.gray_blue,
    borderRadius: 50,
    alignItems: "center"
  },
  button2: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: "center"
  },
  text: {
    color: colors.terciary,
  },
  createAc: {
    width: "100%",
    alignItems: "center"

  }

});