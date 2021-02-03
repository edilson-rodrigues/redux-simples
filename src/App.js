import AppStyle from './AppStyle';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';


const App = () => (
  <AppStyle>
    <AppStyle.Title>
      Exercício React-Redux (Simples)
    </AppStyle.Title>
    <AppStyle.Row>
      <Intervalo />
    </AppStyle.Row>
    <AppStyle.Row>
      <Media />
      <Soma />
      <Sorteio />
    </AppStyle.Row>
  </AppStyle>
);


export default App;
