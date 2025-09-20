import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import { colors } from '../../config/theme/colors';
import Cards from '../Cards';

const booksList = [
  {
    id: "1",
    autor: "aaa",
    bookName: "Nome Livro",
    rating: "5.0",
  },
  {
    id: "2",
    autor: "aaa",
    bookName: "Nome Livro",
    rating: "5.0",
  },
  {
    id: "3",
    autor: "aaa",
    bookName: "Nome Livro",
    rating: "5.0",
  },
  {
    id: "4",
    autor: "aaa",
    bookName: "Nome Livro",
    rating: "5.0",
  },

]

export default function MainNewBooksSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Livros Novos no Catálogo</Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>Ver tudo</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      horizontal
      data={booksList} 
      keyExtractor={item => item.id} 
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Cards autor={item.autor} bookName={item.bookName} rating={item.rating} id={item.id}/>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  text: {
    fontFamily: "high-cruiser",
    color: colors.terciary,
    fontSize: 20
  },
  textButton: {
    color: colors.primary,
    fontSize: 20
  }

});