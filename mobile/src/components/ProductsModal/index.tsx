import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody } from './styles';

interface ProductModalPorps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ visible, onClose, product, onAddToCart }: ProductModalPorps) => {
  if (!product) return null;
  const handleAddToCart = () => {
    onAddToCart(product!);
    onClose;
  };
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.1.7:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close color="#fff" />
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredients) => ingredients._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <Text color="#666">Preço</Text>
          <Text size={20} weight="600">
            {formatCurrency(product.price)}
          </Text>
        </FooterContainer>

        <Button onPress={handleAddToCart}>Adicionar Pedido</Button>
      </Footer>
    </Modal>
  );
};

export default ProductModal;
