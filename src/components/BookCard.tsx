import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Book} from '../screens/BookListScreen';
import {width_screen} from '../utils/dimensions';
import {ROUTES} from '../utils/routes';

interface Props {
  book: Book;
}

export default function BookCard({book}: Props) {
  const navigation = useNavigation();

  const onDetail = useCallback(
    () =>
      // @ts-ignore
      navigation.navigate(ROUTES.BookDetail, {
        data: book,
      }),
    [navigation, book],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onDetail}>
      <Image source={{uri: book.imgUrl}} style={styles.img} />
      <View style={styles.name}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subtitle}>{book.subtitle}</Text>
        <Text style={styles.author}> Author: {book.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  img: {
    height: width_screen * 0.6,
  },
  title: {
    color: '#e67e22',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  subtitle: {
    color: '#777',
    fontSize: 15,
    marginBottom: 5,
  },
  name: {
    padding: 10,
  },
  author: {
    color: '#555',
  },
});
