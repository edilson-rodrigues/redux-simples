
import Card from './components/Card/'
import { AppStyle, TitleApp, FlexRow } from './AppStyle'

const App = () => (
  <AppStyle>
    <TitleApp>
      Exercício React-Redux (Simples)
    </TitleApp>
    <FlexRow>
      <Card />
    </FlexRow>
    <FlexRow>
      <Card />
    </FlexRow>
  </AppStyle>
);


export default App;
