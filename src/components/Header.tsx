import React, {memo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ROUTES} from '../utils/routes';
import {Book} from '../screens/BookListScreen';

interface Props {
  books: Book[];
}

const Header = ({books}: Props) => {
  const navigation = useNavigation();

  const onSearchPage = useCallback(() => {
    // @ts-ignore
    navigation.navigate(ROUTES.Search, {
      data: books,
    });
  }, [navigation, books]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {' '}
        <Icon name="book" size={20} /> Book Mania
      </Text>

      <TouchableOpacity onPress={onSearchPage}>
        <Icon name="search" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d35400',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Header;
