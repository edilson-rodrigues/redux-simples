import React from 'react';
import AppStyle from './AppStyle';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';


const App = () => {

  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(10);


  return (
    <AppStyle>
      <AppStyle.Title>
        Exercício React-Redux (Simples)
    </AppStyle.Title>
      <AppStyle.Row>
        <Intervalo />
      </AppStyle.Row>
      <AppStyle.Row>
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </AppStyle.Row>
    </AppStyle>
  );
}


export default App;
