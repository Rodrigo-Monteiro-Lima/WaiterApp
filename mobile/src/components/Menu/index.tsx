import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../types/Product';
import { baseURL } from '../../utils/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import ProductModal from '../ProductsModal';
import { Text } from '../Text';
import {ProductContainer, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

const Menu = ({ onAddToCart, products }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);
  const handleOpenModal = (product: Product) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };
  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(products) => products._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `${baseURL}/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
};

export default Menu;
