import Header from './components/Header';
import Orders from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      < Header />
      < Orders/>
    </>
  );
};

export default App;
