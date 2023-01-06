import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const Orders = () => {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
      />
      <OrdersBoard
        icon="✅"
        title="Pronto !"
      />
    </Container>
  );
};

export default Orders;
