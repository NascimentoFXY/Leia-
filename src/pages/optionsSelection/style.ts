import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/theme/colors';


const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  optionsContainer:{
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    flex: 1,
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
  },
  title:{
    fontSize: 20,
    fontWeight: 800,
    textAlign: "center",
  },
  subtitle:{
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center",

  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton:{
    padding: 20,
    justifyContent: "center"
  }
  
});