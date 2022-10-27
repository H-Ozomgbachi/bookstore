import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {Book} from './BookListScreen';
import {width_screen} from '../utils/dimensions';
import {formatDate} from '../utils/formatter';

export default function BookDetailScreen() {
  const route = useRoute();

  // @ts-ignore
  const routeParam = route.params?.data as Book;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>{routeParam.title}</Text>
      <Text style={styles.subtitle}>{routeParam.subtitle}</Text>

      <Image source={{uri: routeParam.imgUrl}} style={styles.img} />

      <Text style={styles.publisher}>
        Published by : {routeParam.publisher}
      </Text>

      <View style={styles.section}>
        <Text style={styles.headings}>Description</Text>
        <Text style={styles.normalText}>{routeParam.description}</Text>
      </View>

      <View style={[styles.section, styles.marginBottom]}>
        <Text style={styles.headings}>More Info</Text>
        <Text style={styles.normalText}>Pages : {routeParam.pages}</Text>
        <Text style={styles.normalText}>ISBN : {routeParam.isbn}</Text>
        <Text style={styles.normalText}>
          Published On : {formatDate(routeParam.published)}
        </Text>
        <Text style={styles.normalText}>Author : {routeParam.author}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    marginVertical: 10,
  },
  title: {
    color: '#e67e22',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  subtitle: {
    color: '#777',
    fontSize: 15,
    marginBottom: 5,
  },
  img: {
    height: width_screen * 0.6,
    borderRadius: 5,
  },
  normalText: {
    color: '#555',
    lineHeight: 25,
    fontSize: 16.2,
  },
  publisher: {
    color: '#666',
    fontStyle: 'italic',
    paddingTop: 5,
  },
  headings: {
    color: '#2c3e50',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  marginBottom: {
    marginBottom: 30,
  },
});
