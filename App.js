import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };

export default function App() {
  const [isFontLoaded] = Font.useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!isFontLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
