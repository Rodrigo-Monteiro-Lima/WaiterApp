import { Order } from '../../types/Order';
import {Board, OrdersContainer} from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

const OrdersBoard = ({icon, title, orders}: OrderBoardProps) => {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      { orders.length > 0 && (<OrdersContainer>
        {orders.map(({table, products, _id}) => (
          <button type='button' key={_id}>
            <strong>Mesa {table}</strong>
            <span>{products.length} itens</span>
          </button>
        ))}
      </OrdersContainer>)}
    </Board>
  );
};

export default OrdersBoard;
