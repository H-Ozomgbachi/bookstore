import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {' '}
        <Icon name="book" size={20} /> Book Mania
      </Text>

      <TouchableOpacity>
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
