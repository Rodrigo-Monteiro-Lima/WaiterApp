import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from './styles';

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({cartItems}: CartProps) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({ item: cartItem }) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `http://dvvxp70.anonymous.19000.exp.direct:3390/uploads/${cartItem.product.imagePath}`,
                }}
              />
              <QuantityContainer>
                <Text size={14} color="#666">
                  {cartItem.quantity}x
                </Text>
              </QuantityContainer>
              <ProductDetails>
                <Text size={14} weight="600" style={{ marginBottom: 4 }}>
                  {cartItem.product.name}
                </Text>
                <Text size={14} color="#666">
                  {formatCurrency(cartItem.product.price)}
                </Text>
              </ProductDetails>
            </ProductContainer>
            <Actions>
              <TouchableOpacity
                style={{ marginRight: 24 }}
              >
                <MinusCircle />
              </TouchableOpacity>
              <TouchableOpacity>
                <PlusCircle />
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999">
              Seu carrinho{'\n'}
              está vazio
            </Text>
          )}
        </TotalContainer>
        <Button
          disabled={cartItems.length === 0}
          onPress={() => alert('Confirmar')}
        >
          Confirmar Pedido
        </Button>
      </Summary>
    </>
  );
};

export default Cart;
