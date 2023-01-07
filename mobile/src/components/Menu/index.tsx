import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';

const Menu = () => {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(products) => products._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image>
            <ProductDetails>
              <Text>{product.name}</Text>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
            </ProductDetails>
          </Image>
        </Product>
      )}
    />
  );
};

export default Menu;
