import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookListScreen from './screens/BookListScreen';
import Header from './components/Header';
import BookDetailScreen from './screens/BookDetailScreen';
import {ROUTES} from './utils/routes';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.BookList}>
        <Stack.Screen
          name={ROUTES.BookList}
          component={BookListScreen}
          options={{
            // header: Header,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.BookDetail}
          component={BookDetailScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={ROUTES.Search}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
