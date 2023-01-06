import logo from '../../assets/images/logo.svg';


const Header = () => {
  return (
    <div>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe o pedido dos clientes</h2>
      </div>
      <img src={logo} alt="Logo Waiter App" />
    </div>
  );
};

export default Header;
