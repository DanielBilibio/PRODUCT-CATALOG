import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(product)}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductItem;
