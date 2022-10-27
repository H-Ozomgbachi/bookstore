import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BookCard from '../components/BookCard';
import Header from '../components/Header';
import {formatNumber} from '../utils/formatter';

export interface Book {
  id: number;
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  imgUrl: string;
}

export default function BookListScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book[]>([]);

  const getBooks = async () => {
    try {
      const response = await fetch(
        'https://fudap-books-api.herokuapp.com/books/',
      );
      const json = (await response.json()) as Book[];
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const renderItem = useCallback(({item}: {item: Book}) => {
    return <BookCard book={item} />;
  }, []);

  return (
    <>
      <Header books={data} />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator
            testID="loading"
            accessibilityLabel="App is loading books"
            size={'large'}
            color="orange"
          />
        ) : (
          <FlatList
            renderItem={renderItem}
            data={data}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Text style={styles.heading}>
                {formatNumber(data.length)} Books Available...
              </Text>
            }
            ListHeaderComponentStyle={styles.bottomMargin}
            accessibilityLabel="books"
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomMargin: {
    marginBottom: 5,
  },
  contentContainerStyle: {
    marginBottom: 50,
  },
});
