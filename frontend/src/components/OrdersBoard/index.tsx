import { useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import OrderModal from '../OrderModal';
import {Board, OrdersContainer} from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

const OrdersBoard = ({icon, title, orders}: OrderBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleChangeOrderStatus = async () => {
    setIsLoading(true);
  };

  const handleCancelOrder = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await api.delete(`/orders/${selectedOrder?._id}`);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      { orders.length > 0 && (<OrdersContainer>
        {orders.map((order) => (
          <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>
        ))}
      </OrdersContainer>)}
    </Board>
  );
};

export default OrdersBoard;
