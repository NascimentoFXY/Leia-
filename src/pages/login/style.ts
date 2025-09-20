import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/theme/colors';
import { font } from '../../config/font/font';


const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20
  },
  title: {
    color: colors.terciary,
    fontWeight: 800,
    fontSize: 30,
    textAlign: "center",
    fontFamily: font.primary
  },
  subTitle: {
    color: colors.terciary,
    fontWeight: 500,
    fontSize: 20,
    fontFamily: font.primary
  },
  userImage:{
    width: 120,
    height: 120,
    borderRadius: 1000,
    backgroundColor: colors.gray_blue
  },
  userEditImage:{
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer:{
    justifyContent:"center",
    alignItems: "center",
  },
  button:{
    backgroundColor: colors.gray_blue,
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    minWidth: 50,
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderColor: colors.primary
  },
  text:{
    color: colors.terciary
  }

});