import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.price}>Preço: R$ {product.price}</Text>
      <Text style={styles.description}>Descrição: {product.description}</Text>
      <Text style={styles.category}>Categoria: {product.category}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default ProductDetails;





