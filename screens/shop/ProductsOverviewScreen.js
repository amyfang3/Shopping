import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  // state.products from rootReducer in App.js
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
