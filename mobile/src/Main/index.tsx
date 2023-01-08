import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Button from '../components/Button';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from './styles';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';
import { Category } from '../types/Category';
import { api } from '../utils/api';

const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  };
  const handleResetOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };
  const handleAddToCart = (product: Product) => {
    if (!selectedTable) setIsTableModalVisible(true);
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }
      const newCartItem = [...prevState];
      const item = newCartItem[itemIndex];
      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };
      return newCartItem;
    });
  };
  const handleDecrementCartItem = (product: Product) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];
      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };
      return newCartItems;
    });
  };
  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([categoriesRes, productsRes]) => {
      setCategories(categoriesRes.data);
      setProducts(productsRes.data);
    }).finally(() => setIsLoading(false));
  }, []);
  const handleSelectCategory = async (categoryId: string) => {
    const route = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;
    setIsLoadingProducts(true);
    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  };


  return (
    <>
      <Container>
        < Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />
        {isLoading ? (
          <>
            <CenteredContainer>
              <ActivityIndicator color="#D73035" size={200} animating={true} />
            </CenteredContainer>
          </>
        ) : (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>
            {products.length > 0  ?(
              <MenuContainer>
                <Menu onAddToCart={handleAddToCart} products={products}/>
              </MenuContainer>)
              : (
                <CenteredContainer>
                  <Empty />
                  <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado!
                  </Text>
                </CenteredContainer>
              )}
          </>
        )}
      </Container>
      <Footer>
        {/* <FooterContainer> */}
        {!selectedTable && <Button onPress={() => setIsTableModalVisible(true) } disabled={isLoading}>Novo Pedido</Button>}
        {selectedTable && (
          <Cart
            cartItems={cartItems}
            onAdd={handleAddToCart}
            onDecrement={handleDecrementCartItem}
            onConfirmOrder={handleResetOrder}
          />
        )}
        {/* </FooterContainer> */}
      </Footer>
      <TableModal visible={isTableModalVisible} onClose={() => setIsTableModalVisible(false)} onSave={handleSaveTable}/>
    </>
  );
};

export default Main;
