import { Modal } from 'react-native';
import { Text } from '../Text';

interface ProductModalPorps {
  visible: boolean;
  onClose: () => void;
}

const ProductModal = ({ visible, onClose }: ProductModalPorps) => {
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
