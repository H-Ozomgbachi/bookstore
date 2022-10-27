import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookListScreen from './screens/BookListScreen';
import Header from './components/Header';
import BookDetailScreen from './screens/BookDetailScreen';
import {ROUTES} from './utils/routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.BookList}>
        <Stack.Screen
          name={ROUTES.BookList}
          component={BookListScreen}
          options={{
            header: Header,
          }}
        />
        <Stack.Screen
          name={ROUTES.BookDetail}
          component={BookDetailScreen}
          //   options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
