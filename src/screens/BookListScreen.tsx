import React, {useCallback} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import BookCard from '../components/BookCard';
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

const data = [
  {
    id: 1,
    isbn: '9781593279509',
    title: 'Eloquent JavaScript, Third Edition',
    subtitle: 'A Modern Introduction to Programming',
    author: 'Marijn Haverbeke',
    published: '2018-12-04T00:00:00.000Z',
    publisher: 'No Starch Press',
    pages: 472,
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    imgUrl:
      'https://kuulpeeps.com/wp-content/uploads/2019/10/The-Verge-Novels.jpg',
  },
  {
    id: 2,
    isbn: '9781491943533',
    title: 'Practical Modern JavaScript',
    subtitle: 'Dive into ES6 and the Future of JavaScript',
    author: 'Nicolás Bevacqua',
    published: '2017-07-16T00:00:00.000Z',
    publisher: "O'Reilly Media",
    pages: 334,
    description:
      'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.',
    imgUrl:
      'https://i0.wp.com/www.perfectionistwannabe.com/wp-content/uploads/2020/02/read-more.jpg?resize=1024%2C768&ssl=1',
  },
];

export default function BookListScreen() {
  const renderItem = useCallback(({item}: {item: Book}) => {
    return <BookCard book={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.heading}>
            {formatNumber(54000)} Books Available...
          </Text>
        }
        ListHeaderComponentStyle={styles.bottomMargin}
      />
    </View>
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
