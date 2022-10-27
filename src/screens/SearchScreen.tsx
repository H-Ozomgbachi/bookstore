import React, {useCallback, useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {Book} from './BookListScreen';
import {ROUTES} from '../utils/routes';
import {width_screen} from '../utils/dimensions';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Book[]>([]);
  const route = useRoute();
  const navigation = useNavigation();

  // @ts-ignore
  const passedData = route.params?.data as Book[];

  useEffect(() => {
    if (search === '') {
      setResults([]);
    }
  }, [search]);

  const onDetail = useCallback(
    (book: Book) =>
      // @ts-ignore
      navigation.navigate(ROUTES.BookDetail, {
        data: book,
      }),
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Book}) => {
      return (
        <TouchableOpacity
          style={styles.resultItem}
          onPress={() => onDetail(item)}>
          <Text style={styles.resultTitle}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [onDetail],
  );

  const filterBooks = (value: string) => {
    setSearch(value);
    setResults(passedData.filter(el => el.title.includes(value)));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <SearchBar
          autoFocus={true}
          placeholder="Search Books..."
          onChangeText={text => filterBooks(text)}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
        />
      </View>

      <FlatList
        renderItem={renderItem}
        data={results}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: '#fff',
  },
  resultTitle: {
    color: '#555',
    fontSize: 16,
  },
  resultItem: {
    width: width_screen,
    padding: 15,
    backgroundColor: '#eee',
  },
});
