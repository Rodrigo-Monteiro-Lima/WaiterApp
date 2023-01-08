import { Modal } from 'react-native';
import { Product } from '../../types/Product';
import { Text } from '../Text';
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody } from './styles';

interface ProductModalPorps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

const ProductModal = ({ visible, onClose, product }: ProductModalPorps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Text>ProductModal</Text>
    </Modal>
  );
};

export default ProductModal;
