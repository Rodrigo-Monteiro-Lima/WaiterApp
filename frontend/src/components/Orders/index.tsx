import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const Orders = () => {
  return (
    <Container>
      <OrdersBoard />
      <OrdersBoard />
      <OrdersBoard />
    </Container>
  );
};

export default Orders;
