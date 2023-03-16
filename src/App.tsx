import styled from 'styled-components';
import Header from './components/Minimalist/Header';

const Background = styled.div`
  background: linear-gradient(42.36deg, #007C81 0.31%, #081955 62.55%);
  height: 100vh;
`;

// interface AppProps {
//   title: string
// }

const App = () => {
  return (
    <Background className="App">
      <Header title="portfolio" />
    </Background>
  );
};

export default App;
