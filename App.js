import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

// React Native debugging
const store = createStore(rootReducer, composeWithDevTools());

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
